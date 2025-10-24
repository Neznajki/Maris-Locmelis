
import { lazy } from 'react'
import type { MenuItem } from '@/types/menu'
import { Home, HomeTitle } from '@/pages/HomePage'

const AboutMe         = lazy(() => import('@/pages/AboutMePage'))
const Personality     = lazy(() => import('@/pages/PersonalityPage'))
const Contacts        = lazy(() => import('@/pages/ContactsPage'))
const Tech            = lazy(() => import('@/pages/SiteTechStackPage'))
const Recommendations = lazy(() => import('@/pages/RecommendationsPage'))
const CvPage          = lazy(() => import('@/pages/CvPage'))

export const menuItems: MenuItem[] = [
  { kind: 'item', id: 'home', path: '/', title: HomeTitle, body: Home },
  {
    kind: 'group',
    id: 'info',
    title: 'Information',
    sections: [
      { id: 'about',       path: '/about',       title: 'About Me',       body: AboutMe },
      { id: 'personality', path: '/personality', title: 'Personality',    body: Personality },
      { id: 'contacts',    path: '/contacts',    title: 'Contacts',       body: Contacts },
      { id: 'tech',        path: '/tech',        title: 'Site Tech Stack',body: Tech },
      { id: 'recommendations',        path: '/recommendations',        title: 'Recommendations',body: Recommendations },
    ],
  },
  {
      kind: 'group',
      id: 'recruiters',
      title: 'For Recruiters',
      sections: [
        { id: 'cv',          path: '/cv',          title: 'My CV',          body: CvPage },
        { id: 'recruitersContacts',    path: '/contacts',    title: 'Contacts',       body: Contacts },
      ],
    },
  // You can add more 1D items or groups here.
]
