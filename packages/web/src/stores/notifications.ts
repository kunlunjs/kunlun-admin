import { nanoid } from 'nanoid'
import create from 'zustand'

export type Notification = {
  type: 'info' | 'warning' | 'success' | 'error'
  id: string
  title: string
  message?: string
}

type NotificationsStore = {
  notifications: Notification[]
  addNotification: (notification: Omit<Notification, 'id'>) => void
  dismissNotification: (id: string) => void
}

export const useNotificationStore = create<NotificationsStore>(set => ({
  notifications: [],
  addNotification: notification =>
    set(state => ({
      notifications: [...state.notifications, { id: nanoid(), ...notification }]
    })),
  dismissNotification: id =>
    set(state => ({
      notifications: state.notifications.filter(
        notification => notification.id !== id
      )
    }))
}))
