function getDataURL(file: any) {
    return new Promise<string>((resolve, reject) => {
        const reader = new FileReader()
        let result: string = ''
        reader.readAsDataURL(file)
        reader.onload = function () {
            if (reader.result) {
                result = reader.result.toString()
            }
        }
        reader.onerror = function (error) {
            reject(error)
        }
        reader.onloadend = function () {
            resolve(result)
        }
    })
}

async function getBase64FromFile(file: any): Promise<string> {
    const dataUrl = await getDataURL(file)
    return dataUrl.substring(dataUrl.indexOf(',') + 1)
}

export default { getDataURL, getBase64FromFile }
