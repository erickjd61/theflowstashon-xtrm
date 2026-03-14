import { useState, useEffect, useRef, useCallback } from 'react'
import { useModal } from './modal-context'

const GOLD = '#C9A84C'
const DARK_BG = '#0D0D0D'
const INPUT_BG = '#1A1A1A'
const BORDER = '#333333'
const LABEL_COLOR = '#999999'
const ERROR_COLOR = '#E53E3E'

interface ClubFormState {
  fullName: string
  email: string
  phone: string
  instagram: string
  membershipTier: string
  trainingDays: string
  preferredTime: string
  drawsYou: string
}

interface ClubTouchedState {
  fullName: boolean
  email: boolean
  phone: boolean
  membershipTier: boolean
  trainingDays: boolean
  preferredTime: boolean
}

const initialForm: ClubFormState = {
  fullName: '',
  email: '',
  phone: '',
  instagram: '',
  membershipTier: '',
  trainingDays: '',
  preferredTime: '',
  drawsYou: '',
}

const initialTouched: ClubTouchedState = {
  fullName: false,
  email: false,
  phone: false,
  membershipTier: false,
  trainingDays: false,
  preferredTime: false,
}

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function ClubModal() {
  const { openModal, closeModal } = useModal()
  const isOpen = openModal === 'club'
  const [form, setForm] = useState<ClubFormState>(initialForm)
  const [touched, setTouched] = useState<ClubTouchedState>(initialTouched)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [networkError, setNetworkError] = useState(false)
  const overlayRef = useRef<HTMLDivElement>(null)
  const firstFocusRef = useRef<HTMLInputElement>(null)

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
      touched.email &&
      (!form.email.trim()
        ? 'Email is required.'
        : !validateEmail(form.email)
          ? 'Enter a valid email address.'
          : ''),
    phone:
      touched.phone && !form.phone.trim() ? 'Phone number is required.' : '',
    membershipTier:
      touched.membershipTier && !form.membershipTier
        ? 'Please select a membership tier.'
        : '',
    trainingDays:
      touched.trainingDays && !form.trainingDays
        ? 'Please select training days.'
        : '',
    preferredTime:
      touched.preferredTime && !form.preferredTime
        ? 'Please select a preferred time.'
        : '',
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const allTouched: ClubTouchedState = Object.fromEntries(
      Object.keys(initialTouched).map((k) => [k, true]),
    ) as ClubTouchedState
    setTouched(allTouched)
    const hasErrors =
      !form.fullName.trim() ||
      !form.email.trim() ||
      !validateEmail(form.email) ||
      !form.phone.trim() ||
      !form.membershipTier ||
      !form.trainingDays ||
      !form.preferredTime
    if (hasErrors) return
    setSubmitting(true)
    setNetworkError(false)
    try {
      const endpoint = import.meta.env.VITE_FORM_ENDPOINT
      if (endpoint) {
        await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({ formType: 'CLUB_STASHON_X', ...form }),
        })
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
      aria-label="Club STASHON X Application"
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
            headline="You're In."
            body="Your spot has been noted. We'll be in touch shortly with next steps and your membership details."
            muted="CLUB STASHON X · THEFLOWSTASHON XTRM"
            gold={GOLD}
          />
        ) : (
          <>
            {/* Header */}
            <p style={eyebrowStyle(GOLD)}>CLUB STASHON X</p>
            <h2 style={headlineStyle}>Join Club STASHON X</h2>
            <p style={subtextStyle}>
              The Founding 20 rate is $149/month — locked for life. Once they're
              gone, standard membership is $199/month. Enter your information to
              claim your spot.
            </p>

            <form
              onSubmit={handleSubmit}
              noValidate
              style={{ marginTop: '2rem' }}
            >
              {/* SECTION: YOUR INFORMATION */}
              <SectionHeader title="Your Information" gold={GOLD} />

              <Field label="Full Name" error={errors.fullName}>
                <input
                  ref={firstFocusRef}
                  type="text"
                  value={form.fullName}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, fullName: e.target.value }))
                  }
                  onBlur={() => setTouched((t) => ({ ...t, fullName: true }))}
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

              {/* SECTION: MEMBERSHIP TIER */}
              <SectionHeader title="Membership Tier" gold={GOLD} />

              <Field label="Select Your Tier" error={errors.membershipTier}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                  }}
                >
                  {/* Founding 20 — premium card */}
                  <label
                    style={{
                      display: 'block',
                      border: `1.5px solid ${form.membershipTier === 'founding-20' ? GOLD : BORDER}`,
                      background:
                        form.membershipTier === 'founding-20'
                          ? 'rgba(201,168,76,0.07)'
                          : INPUT_BG,
                      padding: '1.1rem 1.25rem',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      position: 'relative',
                    }}
                    onClick={() => {
                      setForm((f) => ({ ...f, membershipTier: 'founding-20' }))
                      setTouched((t) => ({ ...t, membershipTier: true }))
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        top: '-10px',
                        left: '1rem',
                        background: GOLD,
                        color: '#060606',
                        fontFamily: '"Syne", sans-serif',
                        fontWeight: 700,
                        fontSize: '0.55rem',
                        letterSpacing: '0.18em',
                        padding: '0.2rem 0.65rem',
                        textTransform: 'uppercase',
                      }}
                    >
                      ALMOST GONE
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.75rem',
                      }}
                    >
                      <RadioDot
                        selected={form.membershipTier === 'founding-20'}
                        gold={GOLD}
                      />
                      <div>
                        <div
                          style={{
                            fontFamily: '"Syne", sans-serif',
                            fontWeight: 700,
                            fontSize: '0.88rem',
                            color: GOLD,
                            marginBottom: '0.2rem',
                          }}
                        >
                          The Founding 20 — $149/month
                        </div>
                        <div
                          style={{
                            fontFamily: '"Syne", sans-serif',
                            fontSize: '0.72rem',
                            color: 'rgba(245,240,232,0.45)',
                            letterSpacing: '0.1em',
                          }}
                        >
                          LOCKED RATE · LAUNCHING MARCH 14 · ALMOST GONE
                        </div>
                      </div>
                    </div>
                  </label>

                  {/* Standard */}
                  <label
                    style={{
                      display: 'block',
                      border: `1.5px solid ${form.membershipTier === 'standard' ? GOLD : BORDER}`,
                      background: INPUT_BG,
                      padding: '1.1rem 1.25rem',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                    onClick={() => {
                      setForm((f) => ({ ...f, membershipTier: 'standard' }))
                      setTouched((t) => ({ ...t, membershipTier: true }))
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                      }}
                    >
                      <RadioDot
                        selected={form.membershipTier === 'standard'}
                        gold={GOLD}
                      />
                      <div
                        style={{
                          fontFamily: '"Syne", sans-serif',
                          fontWeight: 600,
                          fontSize: '0.88rem',
                          color: '#F5F0E8',
                        }}
                      >
                        Standard Membership — $199/month
                      </div>
                    </div>
                  </label>
                </div>
              </Field>

              {/* SECTION: YOUR PROFILE */}
              <SectionHeader title="Your Profile" gold={GOLD} />

              <Field label="Training Days Per Week" error={errors.trainingDays}>
                <RadioGroup
                  name="clubTrainingDays"
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
                  name="clubPreferredTime"
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

              <Field label="What draws you to Club STASHON X? (optional)">
                <textarea
                  value={form.drawsYou}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, drawsYou: e.target.value }))
                  }
                  placeholder="Tell us what excites you about this..."
                  rows={3}
                  style={textareaStyle(false)}
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
                {submitting ? <Spinner /> : 'CLAIM MY SPOT'}
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

function RadioDot({ selected, gold }: { selected: boolean; gold: string }) {
  return (
    <span
      style={{
        width: '16px',
        height: '16px',
        borderRadius: '50%',
        border: `2px solid ${selected ? gold : BORDER}`,
        background: selected ? gold : INPUT_BG,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        transition: 'all 0.15s',
      }}
    >
      {selected && (
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
  )
}

function RadioGroup({
  name,
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
  return { ...inputStyle(hasError), resize: 'vertical', minHeight: '90px' }
}

function eyebrowStyle(gold: string): React.CSSProperties {
  return {
    fontFamily: '"Syne", sans-serif',
    fontSize: '0.65rem',
    fontWeight: 700,
    letterSpacing: '0.22em',
    color: gold,
    textTransform: 'uppercase',
    margin: '0 0 0.5rem',
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
