export interface ApiMenuEntry extends CommonMenuFields {
  path: string | null
  items?: Array<CommonMenuFields>
}

export interface CommonMenuFields {
  id: string
  path: string | null
  title: string
  bodyComponent: string
  displayOrder: number
}