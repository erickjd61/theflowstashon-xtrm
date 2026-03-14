import { useState, useEffect, useRef, useCallback } from 'react'
import { useModal } from './modal-context'

const GOLD = '#C9A84C'
const DARK_BG = '#0D0D0D'
const INPUT_BG = '#1A1A1A'
const BORDER = '#333333'
const LABEL_COLOR = '#999999'
const ERROR_COLOR = '#E53E3E'

const trainingOptions = [
  'Weightlifting / Strength Training',
  'Running / Jogging',
  'Swimming',
  'Yoga / Pilates',
  'Fitness Classes / Group Training',
  'Dance',
  'Walking / Hiking',
  'Cardio / HIIT',
  'Other',
]

interface FormState {
  fullName: string
  email: string
  phone: string
  instagram: string
  enrollmentType: string
  currentTraining: string[]
  otherTraining: string
  trainingDays: string
  preferredTime: string
  goalResult: string
  mentalBlockage: string
  rightFit: string
  affirmation: string
}

interface TouchedState {
  fullName: boolean
  email: boolean
  phone: boolean
  enrollmentType: boolean
  trainingDays: boolean
  preferredTime: boolean
  goalResult: boolean
  mentalBlockage: boolean
  rightFit: boolean
  affirmation: boolean
}

const initialForm: FormState = {
  fullName: '',
  email: '',
  phone: '',
  instagram: '',
  enrollmentType: '',
  currentTraining: [],
  otherTraining: '',
  trainingDays: '',
  preferredTime: '',
  goalResult: '',
  mentalBlockage: '',
  rightFit: '',
  affirmation: '',
}

const initialTouched: TouchedState = {
  fullName: false,
  email: false,
  phone: false,
  enrollmentType: false,
  trainingDays: false,
  preferredTime: false,
  goalResult: false,
  mentalBlockage: false,
  rightFit: false,
  affirmation: false,
}

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function wordCount(str: string) {
  return str.trim().split(/\s+/).filter(Boolean).length
}

export function ResidencyModal() {
  const { openModal, closeModal } = useModal()
  const isOpen = openModal === 'residency'
  const [form, setForm] = useState<FormState>(initialForm)
  const [touched, setTouched] = useState<TouchedState>(initialTouched)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [networkError, setNetworkError] = useState(false)
  const overlayRef = useRef<HTMLDivElement>(null)
  const firstFocusRef = useRef<HTMLInputElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  // Reset on open
  useEffect(() => {
    if (isOpen) {
      setForm(initialForm)
      setTouched(initialTouched)
      setSubmitted(false)
      setNetworkError(false)
      document.body.style.overflow = 'hidden'
      setTimeout(() => firstFocusRef.current?.focus(), 50)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) closeModal()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [isOpen, closeModal])

  const handleOverlayClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === overlayRef.current) closeModal()
    },
    [closeModal],
  )

  const errors = {
    fullName:
      touched.fullName && !form.fullName.trim() ? 'Full name is required.' : '',
    email:
      (touched.email
        ? (!form.email.trim()
            ? 'Email is required.'
            : !validateEmail(form.email)
              ? 'Enter a valid email address.'
              : '')
        : ''),
    phone:
      touched.phone && !form.phone.trim() ? 'Phone number is required.' : '',
    enrollmentType:
      touched.enrollmentType && !form.enrollmentType
        ? 'Please select an enrollment type.'
        : '',
    trainingDays:
      touched.trainingDays && !form.trainingDays
        ? 'Please select training days.'
        : '',
    preferredTime:
      touched.preferredTime && !form.preferredTime
        ? 'Please select a preferred time.'
        : '',
    goalResult:
      touched.goalResult && wordCount(form.goalResult) < 3
        ? 'Please write at least 3 words.'
        : '',
    mentalBlockage:
      touched.mentalBlockage && wordCount(form.mentalBlockage) < 3
        ? 'Please write at least 3 words.'
        : '',
    rightFit:
      touched.rightFit && !form.rightFit.trim()
        ? 'This field is required.'
        : '',
    affirmation:
      touched.affirmation && !form.affirmation
        ? 'Please select an option.'
        : '',
  }

  function toggleTraining(option: string) {
    setForm((f) => ({
      ...f,
      currentTraining: f.currentTraining.includes(option)
        ? f.currentTraining.filter((o) => o !== option)
        : [...f.currentTraining, option],
    }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const allTouched: TouchedState = Object.fromEntries(
      Object.keys(initialTouched).map((k) => [k, true]),
    ) as unknown as TouchedState
    setTouched(allTouched)
    const hasErrors = Object.values({
      ...errors,
      fullName: !form.fullName.trim(),
      email: !form.email.trim() || !validateEmail(form.email),
      phone: !form.phone.trim(),
      enrollmentType: !form.enrollmentType,
      trainingDays: !form.trainingDays,
      preferredTime: !form.preferredTime,
      goalResult: wordCount(form.goalResult) < 3,
      mentalBlockage: wordCount(form.mentalBlockage) < 3,
      rightFit: !form.rightFit.trim(),
      affirmation: !form.affirmation,
    }).some(Boolean)
    if (hasErrors) return
    setSubmitting(true)
    setNetworkError(false)
    try {
      const endpoint =
        import.meta.env.VITE_RESIDENCY_FORM_ENDPOINT ||
        import.meta.env.VITE_FORM_ENDPOINT
      if (!endpoint) {
        setNetworkError(true)
        return
      }
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ formType: 'RESIDENCY_APPLICATION', ...form }),
      })
      if (!response.ok) {
        setNetworkError(true)
        return
      }
      setSubmitted(true)
    } catch {
      setNetworkError(true)
    } finally {
      setSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label="Residency Application"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'rgba(0,0,0,0.82)',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        overflowY: 'auto',
        padding: '3rem 1rem',
        animation: 'modalFadeIn 0.28s ease both',
      }}
    >
      <div
        style={{
          background: DARK_BG,
          width: '100%',
          maxWidth: '680px',
          padding: '2.5rem',
          position: 'relative',
          borderTop: `3px solid ${GOLD}`,
          animation: 'modalSlideUp 0.3s ease both',
          flexShrink: 0,
        }}
      >
        {/* Close */}
        <button
          ref={closeRef}
          onClick={closeModal}
          aria-label="Close modal"
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#F5F0E8',
            fontSize: '1.4rem',
            lineHeight: 1,
            padding: '0.25rem',
            opacity: 0.7,
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '1'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '0.7'
          }}
        >
          ✕
        </button>

        {submitted ? (
          <SuccessMessage
            headline="Application Received."
            body="We review every application personally. If you're the right fit, you'll hear from us within 48 hours. The first cohort is forming now."
            muted="THEFLOWSTASHON XTRM"
            gold={GOLD}
          />
        ) : (
          <>
            {/* Header */}
            <p style={labelStyle({ color: GOLD, marginBottom: '0.5rem' })}>
              THEFLOWSTASHON XTRM
            </p>
            <h2 style={headlineStyle}>Apply for the Residency</h2>
            <p style={subtextStyle}>
              Cohort size is limited to 8. Applications are reviewed and
              accepted based on fit, readiness, and commitment.
            </p>

            <form
              onSubmit={handleSubmit}
              noValidate
              style={{ marginTop: '2rem' }}
            >
              {/* SECTION: YOUR INFORMATION */}
              <SectionHeader title="Your Information" gold={GOLD} />

              <Field label="Full Legal Name" error={errors.fullName}>
                <input
                  ref={firstFocusRef}
                  type="text"
                  value={form.fullName}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, fullName: e.target.value }))
                  }
                  onBlur={() => setTouched((t) => ({ ...t, fullName: true }))}
                  placeholder=""
                  required
                  style={inputStyle(!!errors.fullName)}
                />
              </Field>

              <Field label="Email Address" error={errors.email}>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, email: e.target.value }))
                  }
                  onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                  placeholder=""
                  required
                  style={inputStyle(!!errors.email)}
                />
              </Field>

              <Field label="Phone Number" error={errors.phone}>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, phone: e.target.value }))
                  }
                  onBlur={() => setTouched((t) => ({ ...t, phone: true }))}
                  placeholder=""
                  required
                  style={inputStyle(!!errors.phone)}
                />
              </Field>

              <Field label="Instagram Handle (optional)">
                <input
                  type="text"
                  value={form.instagram}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, instagram: e.target.value }))
                  }
                  placeholder="@yourhandle"
                  style={inputStyle(false)}
                />
              </Field>

              {/* SECTION: ENROLLMENT TYPE */}
              <SectionHeader title="Enrollment Type" gold={GOLD} />

              <Field label="Enrollment Type" error={errors.enrollmentType}>
                <RadioGroup
                  name="enrollmentType"
                  value={form.enrollmentType}
                  options={[
                    {
                      value: 'solo',
                      label: 'Solo Elite Enrollment (Individual)',
                    },
                    { value: 'duo', label: 'Duo Success Enrollment (Couple)' },
                  ]}
                  onChange={(v) => {
                    setForm((f) => ({ ...f, enrollmentType: v }))
                    setTouched((t) => ({ ...t, enrollmentType: true }))
                  }}
                  gold={GOLD}
                />
              </Field>

              {/* SECTION: YOUR TRAINING */}
              <SectionHeader title="Your Training" gold={GOLD} />

              <div style={{ marginBottom: '1.5rem' }}>
                <p style={{ ...labelStyle({}), marginBottom: '0.75rem' }}>
                  CURRENT TRAINING — SELECT ALL THAT APPLY
                </p>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                  }}
                >
                  {trainingOptions.map((opt) => (
                    <label key={opt} style={checkboxLabelStyle}>
                      <CustomCheckbox
                        checked={form.currentTraining.includes(opt)}
                        onChange={() => toggleTraining(opt)}
                        gold={GOLD}
                      />
                      <span
                        style={{
                          color: '#F5F0E8',
                          fontSize: '0.9rem',
                          fontFamily: '"Syne", sans-serif',
                        }}
                      >
                        {opt}
                      </span>
                    </label>
                  ))}
                </div>
                {form.currentTraining.includes('Other') && (
                  <input
                    type="text"
                    placeholder="Please specify..."
                    value={form.otherTraining}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, otherTraining: e.target.value }))
                    }
                    style={{ ...inputStyle(false), marginTop: '0.75rem' }}
                  />
                )}
              </div>

              <Field label="Training Days Per Week" error={errors.trainingDays}>
                <RadioGroup
                  name="trainingDays"
                  value={form.trainingDays}
                  options={[
                    { value: '0-1', label: '0–1 days' },
                    { value: '2-3', label: '2–3 days' },
                    { value: '4-5', label: '4–5 days' },
                    { value: '6+', label: '6+ days' },
                  ]}
                  onChange={(v) => {
                    setForm((f) => ({ ...f, trainingDays: v }))
                    setTouched((t) => ({ ...t, trainingDays: true }))
                  }}
                  gold={GOLD}
                  inline
                />
              </Field>

              <Field
                label="Preferred Training Time"
                error={errors.preferredTime}
              >
                <RadioGroup
                  name="preferredTime"
                  value={form.preferredTime}
                  options={[
                    { value: 'morning', label: 'Morning' },
                    { value: 'afternoon', label: 'Afternoon' },
                    { value: 'evening', label: 'Evening' },
                  ]}
                  onChange={(v) => {
                    setForm((f) => ({ ...f, preferredTime: v }))
                    setTouched((t) => ({ ...t, preferredTime: true }))
                  }}
                  gold={GOLD}
                  inline
                />
              </Field>

              {/* SECTION: YOUR COMMITMENT */}
              <SectionHeader title="Your Commitment" gold={GOLD} />

              <Field
                label="What is the ONE physical or mental result you refuse to finish 2026 without achieving?"
                error={errors.goalResult}
              >
                <textarea
                  value={form.goalResult}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, goalResult: e.target.value }))
                  }
                  onBlur={() => setTouched((t) => ({ ...t, goalResult: true }))}
                  rows={3}
                  required
                  style={textareaStyle(!!errors.goalResult)}
                />
              </Field>

              <Field
                label="What has been your primary mental or emotional blockage that has kept you from your peak self?"
                error={errors.mentalBlockage}
              >
                <textarea
                  value={form.mentalBlockage}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, mentalBlockage: e.target.value }))
                  }
                  onBlur={() =>
                    setTouched((t) => ({ ...t, mentalBlockage: true }))
                  }
                  rows={3}
                  required
                  style={textareaStyle(!!errors.mentalBlockage)}
                />
              </Field>

              <Field
                label="Why are you the right fit for this specific 8-person cohort? (max 3 sentences)"
                error={errors.rightFit}
              >
                <textarea
                  value={form.rightFit}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, rightFit: e.target.value }))
                  }
                  onBlur={() => setTouched((t) => ({ ...t, rightFit: true }))}
                  rows={4}
                  maxLength={600}
                  required
                  style={textareaStyle(!!errors.rightFit)}
                />
                <div
                  style={{
                    textAlign: 'right',
                    fontSize: '0.75rem',
                    color: LABEL_COLOR,
                    marginTop: '0.25rem',
                  }}
                >
                  {form.rightFit.length} / 600
                </div>
              </Field>

              {/* SECTION: COMMITMENT AFFIRMATION */}
              <SectionHeader title="Commitment Affirmation" gold={GOLD} />

              <Field label="Affirmation" error={errors.affirmation}>
                <RadioGroup
                  name="affirmation"
                  value={form.affirmation}
                  options={[
                    {
                      value: 'ready',
                      label:
                        'I understand this is a premium, results-driven commitment and I am ready to invest in my evolution.',
                    },
                    {
                      value: 'not-yet',
                      label:
                        'Not Yet — I am only casually inquiring at this time.',
                    },
                  ]}
                  onChange={(v) => {
                    setForm((f) => ({ ...f, affirmation: v }))
                    setTouched((t) => ({ ...t, affirmation: true }))
                  }}
                  gold={GOLD}
                />
              </Field>

              {networkError && (
                <div style={networkErrorStyle}>
                  Something went wrong. Please try again or email us directly.
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                style={submitButtonStyle(submitting, GOLD)}
                onMouseEnter={(e) => {
                  if (!submitting) e.currentTarget.style.opacity = '0.88'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '1'
                }}
              >
                {submitting ? <Spinner /> : 'SUBMIT MY APPLICATION'}
              </button>
            </form>
          </>
        )}
      </div>
      <style>{modalKeyframes}</style>
    </div>
  )
}

// ─── Shared subcomponents ────────────────────────────────────────────────────

function SectionHeader({ title, gold }: { title: string; gold: string }) {
  return (
    <div
      style={{
        borderTop: '1px solid #222',
        paddingTop: '1.5rem',
        marginBottom: '1.25rem',
        marginTop: '0.5rem',
      }}
    >
      <p
        style={{
          fontFamily: '"Syne", sans-serif',
          fontSize: '0.65rem',
          fontWeight: 700,
          letterSpacing: '0.22em',
          color: gold,
          textTransform: 'uppercase',
          margin: 0,
        }}
      >
        {title}
      </p>
    </div>
  )
}

function Field({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div style={{ marginBottom: '1.25rem' }}>
      <label
        style={{
          display: 'block',
          marginBottom: '0.4rem',
          fontFamily: '"Syne", sans-serif',
          fontSize: '0.68rem',
          fontWeight: 600,
          letterSpacing: '0.14em',
          color: LABEL_COLOR,
          textTransform: 'uppercase',
        }}
      >
        {label}
      </label>
      {children}
      {error && (
        <p
          style={{
            margin: '0.3rem 0 0',
            fontSize: '0.75rem',
            color: ERROR_COLOR,
            fontFamily: '"Syne", sans-serif',
          }}
        >
          {error}
        </p>
      )}
    </div>
  )
}

function RadioGroup({
  name: _name,
  value,
  options,
  onChange,
  gold,
  inline = false,
}: {
  name: string
  value: string
  options: { value: string; label: string }[]
  onChange: (v: string) => void
  gold: string
  inline?: boolean
}) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: inline ? 'row' : 'column',
        flexWrap: 'wrap',
        gap: inline ? '0.75rem 1.5rem' : '0.5rem',
      }}
    >
      {options.map((opt) => (
        <label
          key={opt.value}
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.6rem',
            cursor: 'pointer',
          }}
        >
          <span
            onClick={() => onChange(opt.value)}
            role="radio"
            aria-checked={value === opt.value}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === ' ' || e.key === 'Enter') onChange(opt.value)
            }}
            style={{
              width: '16px',
              height: '16px',
              borderRadius: '50%',
              border: `2px solid ${value === opt.value ? gold : BORDER}`,
              background: value === opt.value ? gold : INPUT_BG,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              marginTop: '2px',
              transition: 'all 0.15s',
              cursor: 'pointer',
              boxShadow:
                value === opt.value
                  ? `0 0 0 3px rgba(201,168,76,0.18)`
                  : 'none',
            }}
          >
            {value === opt.value && (
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#060606',
                  display: 'block',
                }}
              />
            )}
          </span>
          <span
            style={{
              fontFamily: '"Syne", sans-serif',
              fontSize: '0.88rem',
              color: '#F5F0E8',
              lineHeight: 1.5,
            }}
          >
            {opt.label}
          </span>
        </label>
      ))}
    </div>
  )
}

function CustomCheckbox({
  checked,
  onChange,
  gold,
}: {
  checked: boolean
  onChange: () => void
  gold: string
}) {
  return (
    <span
      onClick={onChange}
      role="checkbox"
      aria-checked={checked}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault()
          onChange()
        }
      }}
      style={{
        width: '16px',
        height: '16px',
        border: `2px solid ${checked ? gold : BORDER}`,
        background: checked ? gold : INPUT_BG,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        marginTop: '2px',
        transition: 'all 0.15s',
        cursor: 'pointer',
        borderRadius: '2px',
      }}
    >
      {checked && (
        <span
          style={{
            color: '#060606',
            fontSize: '0.6rem',
            fontWeight: 900,
            lineHeight: 1,
          }}
        >
          ✓
        </span>
      )}
    </span>
  )
}

function Spinner() {
  return (
    <span
      style={{
        display: 'inline-block',
        width: '16px',
        height: '16px',
        border: '2px solid rgba(6,6,6,0.3)',
        borderTopColor: '#060606',
        borderRadius: '50%',
        animation: 'spin 0.7s linear infinite',
        verticalAlign: 'middle',
      }}
    />
  )
}

function SuccessMessage({
  headline,
  body,
  muted,
  gold,
}: {
  headline: string
  body: string
  muted: string
  gold: string
}) {
  return (
    <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
      <div
        style={{
          width: '48px',
          height: '48px',
          border: `2px solid ${gold}`,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 2rem',
          fontSize: '1.25rem',
          color: gold,
        }}
      >
        ✓
      </div>
      <h2
        style={{
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: '2.5rem',
          color: '#F5F0E8',
          margin: '0 0 1rem',
          fontWeight: 600,
        }}
      >
        {headline}
      </h2>
      <p
        style={{
          fontFamily: '"Syne", sans-serif',
          fontSize: '0.95rem',
          lineHeight: 1.7,
          color: 'rgba(245,240,232,0.65)',
          margin: '0 0 2rem',
        }}
      >
        {body}
      </p>
      <p
        style={{
          fontFamily: '"Syne", sans-serif',
          fontSize: '0.65rem',
          letterSpacing: '0.2em',
          color: 'rgba(245,240,232,0.3)',
          textTransform: 'uppercase',
          margin: 0,
        }}
      >
        {muted}
      </p>
    </div>
  )
}

// ─── Style helpers ────────────────────────────────────────────────────────────

function inputStyle(hasError: boolean): React.CSSProperties {
  return {
    display: 'block',
    width: '100%',
    background: INPUT_BG,
    border: `1.5px solid ${hasError ? ERROR_COLOR : BORDER}`,
    color: '#F5F0E8',
    fontFamily: '"Syne", sans-serif',
    fontSize: '0.9rem',
    padding: '0.75rem 1rem',
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border-color 0.2s',
  }
}

function textareaStyle(hasError: boolean): React.CSSProperties {
  return {
    ...inputStyle(hasError),
    resize: 'vertical',
    minHeight: '90px',
  }
}

function labelStyle(overrides: React.CSSProperties): React.CSSProperties {
  return {
    fontFamily: '"Syne", sans-serif',
    fontSize: '0.65rem',
    fontWeight: 700,
    letterSpacing: '0.22em',
    color: LABEL_COLOR,
    textTransform: 'uppercase',
    margin: 0,
    ...overrides,
  }
}

const headlineStyle: React.CSSProperties = {
  fontFamily: '"Cormorant Garamond", serif',
  fontWeight: 600,
  fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
  color: '#F5F0E8',
  margin: '0.25rem 0 0.75rem',
  lineHeight: 1.1,
}

const subtextStyle: React.CSSProperties = {
  fontFamily: '"Syne", sans-serif',
  fontSize: '0.88rem',
  color: 'rgba(245,240,232,0.5)',
  lineHeight: 1.6,
  margin: '0 0 0.5rem',
}

const checkboxLabelStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '0.6rem',
  cursor: 'pointer',
}

const networkErrorStyle: React.CSSProperties = {
  background: 'rgba(229,62,62,0.1)',
  border: `1px solid ${ERROR_COLOR}`,
  color: ERROR_COLOR,
  fontFamily: '"Syne", sans-serif',
  fontSize: '0.82rem',
  padding: '0.75rem 1rem',
  marginBottom: '1rem',
}

function submitButtonStyle(
  disabled: boolean,
  gold: string,
): React.CSSProperties {
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    width: '100%',
    background: gold,
    color: '#060606',
    fontFamily: '"Syne", sans-serif',
    fontWeight: 700,
    fontSize: '0.8rem',
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    border: 'none',
    padding: '1.1rem',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.7 : 1,
    marginTop: '1.5rem',
    transition: 'opacity 0.2s',
    minHeight: '48px',
  }
}

const modalKeyframes = `
  @keyframes modalFadeIn { from { opacity: 0 } to { opacity: 1 } }
  @keyframes modalSlideUp { from { opacity: 0; transform: translateY(24px) } to { opacity: 1; transform: translateY(0) } }
  @keyframes spin { to { transform: rotate(360deg) } }
`
