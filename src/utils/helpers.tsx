export const formatDate = (fecha: Date) => {
    const dateNew = new Date()
    const options:Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }
    return dateNew.toLocaleDateString('es-ES', options)
}