export function getDataURL(file: any) {
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

export async function getBase64FromFile(file: any): Promise<string> {
    const dataUrl = await getDataURL(file)
    return dataUrl.substring(dataUrl.indexOf(',') + 1)
}

export function filterString(inputString: string, charactersToExclude: string): string {
    const regexPattern = new RegExp(`[${charactersToExclude}]`, 'g')
    return inputString.replace(regexPattern, '')
}

export function getImageDimensions(dataUrl?: string): Promise<{ width: number; height: number }> {
    return new Promise((resolve, reject) => {
        if (!dataUrl) {
            reject(new Error('dataUrl 为空'))
        } else {
            const img = new Image()

            img.onload = function () {
                resolve({ width: img.width, height: img.height })
            }

            img.onerror = function () {
                reject(new Error('无法加载图像'))
            }

            img.src = dataUrl
        }
    })
}
