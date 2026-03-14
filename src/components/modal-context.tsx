import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from 'react'

type ModalType = 'residency' | 'club' | null

interface ModalContextValue {
  openModal: ModalType
  openResidency: () => void
  openClub: () => void
  closeModal: () => void
}

const ModalContext = createContext<ModalContextValue>({
  openModal: null,
  openResidency: () => {},
  openClub: () => {},
  closeModal: () => {},
})

export function ModalProvider({ children }: { children: ReactNode }) {
  const [openModal, setOpenModal] = useState<ModalType>(null)

  const openResidency = useCallback(() => setOpenModal('residency'), [])
  const openClub = useCallback(() => setOpenModal('club'), [])
  const closeModal = useCallback(() => setOpenModal(null), [])

  return (
    <ModalContext.Provider
      value={{ openModal, openResidency, openClub, closeModal }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export function useModal() {
  return useContext(ModalContext)
}
