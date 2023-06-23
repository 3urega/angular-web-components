/**
 * @description opciones de configuración para el componente
 */
export enum iconType {
    image = 'image',
    icon = 'icon'
}
export enum componentType {
    // Only bg image and title + subtitle
    onlyTitle = 'onlyTitle',
    // A bg image and title + subtitle + pharagraph text
    titleExtended = 'titleExtended',
    // title extended component + content items
    titleContent = 'titleContent'
}
export interface iconItem {
    // puede ser el nombre de un material icon o bien la ruta de una imágen
    icon: string,
    title: object,
    text: object
}
// Opciones de configuración que el componente espera
export interface Options {
    iconType?: iconType,
    componentType?: componentType
}

export interface Button {
    icon: string,
    text: string
}