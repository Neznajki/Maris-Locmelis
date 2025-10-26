import { lazy } from 'react'
import type { MenuItem } from '@/types/menu'
import { Home } from '@/pages/HomePage'

import { HomeTitle } from '@/pages/meta/Home.meta'
import { AboutMeTitle } from '@/pages/meta/AboutMe.meta'
import { PersonalityTitle } from '@/pages/meta/Personality.meta'
import { ContactsTitle } from '@/pages/meta/Contacts.meta'
import { SiteTechStackTitle } from '@/pages/meta/SiteTechStack.meta'
import { RecommendationsTitle } from '@/pages/meta/Recommendations.meta'
import { CvTitle } from '@/pages/meta/Cv.meta'
import { FunTitle } from '@/pages/meta/Fun.meta'
import { WhatsDoneTitle } from '@/pages/meta/WhatsDone.meta'
import { CoverLetterTitle } from '@/pages/meta/CoverLetter.meta'

const AboutMe         = lazy(() => import('@/pages/AboutMePage'))
const Personality     = lazy(() => import('@/pages/PersonalityPage'))
const Contacts        = lazy(() => import('@/pages/ContactsPage'))
const SiteTechStack   = lazy(() => import('@/pages/SiteTechStackPage'))
const Recommendations = lazy(() => import('@/pages/RecommendationsPage'))
const CvPage          = lazy(() => import('@/pages/CvPage'))
const FunPage         = lazy(() => import('@/pages/FunPage'))
const WhatsDone       = lazy(() => import('@/pages/WhatsDonePage'))
const CoverLetter     = lazy(() => import('@/pages/CoverLetterPage'))

export const menuItems: MenuItem[] = [
  { kind: 'item', id: 'home', path: '/', title: HomeTitle, body: Home },
  { kind: 'item', id: 'fun',  path: '/fun', title: FunTitle, body: FunPage },

  {
    kind: 'group',
    id: 'info',
    title: 'Information',
    sections: [
      { id: 'about',          path: '/about',          title: AboutMeTitle,         body: AboutMe },
      { id: 'personality',    path: '/personality',    title: PersonalityTitle,     body: Personality },
      { id: 'contacts',       path: '/contacts',       title: ContactsTitle,        body: Contacts },
      { id: 'tech',           path: '/tech',           title: SiteTechStackTitle,   body: SiteTechStack },
      { id: 'recommendations',path: '/recommendations',title: RecommendationsTitle, body: Recommendations },
    ],
  },

  {
    kind: 'group',
    id: 'recruiters',
    title: 'For Recruiters',
    sections: [
      { id: 'cv',                path: '/cv',           title: CvTitle,           body: CvPage },
      { id: 'recruitersContacts',path: '/contacts',     title: ContactsTitle,     body: Contacts },
      { id: 'whatsDone',         path: '/whats-done',   title: WhatsDoneTitle,    body: WhatsDone },
      { id: 'coverLetter',       path: '/cover-letter', title: CoverLetterTitle,  body: CoverLetter },
    ],
  },
]