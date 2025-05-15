import toast from 'react-hot-toast'
export const getDataClient = async ({ national_document_number }, onSuccess) => {
    try {
        console.log(process.env.NEXT_PUBLIC_API_URL)
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/clients/validation`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ national_document_number }),
        })
        const data = await response.json()
        if (data?.client_data) {
            // toast.success(data.message)
            onSuccess && onSuccess(data.client_data)
        } else {
            toast.error('No se pudo obtener el cliente')
        }
    } catch (error) {
        toast.error(error.error)
        console.log(error)
    }
}
export const getServices = async (onSuccess) => {
    try {
        console.log(process.env.NEXT_PUBLIC_API_URL)
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/payment/services`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
        const data = await response.json()
        if (data?.data) {
            // toast.success(data.message)
            onSuccess && onSuccess(data.data)
        } else {
            toast.error('No se pudo obtener el servicio')
        }
    } catch (error) {
        toast.error(error.error)
        console.log(error)
    }
}
export const getCountries = async (onSuccess) => {
    try {
        console.log(process.env.NEXT_PUBLIC_API_URL)
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/countries`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
        const data = await response.json()
        if (data?.data) {
            // toast.success(data.message)
            onSuccess && onSuccess(data.data)
        } else {
            toast.error('No se pudo obtener el servicio')
        }
    } catch (error) {
        toast.error(error.error)
        console.log(error)
    }
}
