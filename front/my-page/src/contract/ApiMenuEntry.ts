export interface ApiMenuEntry extends CommonMenuFields {
  path: string | null
  submenuItems?: Array<CommonMenuFields>
}

export interface CommonMenuFields {
  id: string
  path: string | null
  titleComponent: string | null
  bodyComponent: string | null
}