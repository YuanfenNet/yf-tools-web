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

export function loadImage(url: string | undefined): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
        if (!url) {
            reject(new Error('url 为空'))
        } else {
            var img = new Image()
            img.onload = function () {
                resolve(img)
            }
            img.onerror = function () {
                reject(new Error('加载图片失败'))
            }
            img.src = url
        }
    })
}

export function getImageDimensions(url: string | undefined): Promise<{ width: number; height: number }> {
    return new Promise((resolve, reject) => {
        loadImage(url)
            .then((img) => {
                resolve({ width: img.width, height: img.height })
            })
            .catch((e) => {
                reject(e)
            })
    })
}

export function rotateImage(url: string | undefined, type: string = 'image/jpeg', degree: number = 0): Promise<string> {
    return new Promise((resolve, reject) => {
        loadImage(url)
            .then((img) => {
                const canvas = document.createElement('canvas')
                const ctx = canvas.getContext('2d')!
                canvas.width = img.height
                canvas.height = img.width
                ctx.translate(canvas.width / 2, canvas.height / 2)
                ctx.rotate((degree * Math.PI) / 180)
                ctx.drawImage(img, -img.width / 2, -img.height / 2)
                resolve(canvas.toDataURL(type))
            })
            .catch((e) => {
                reject(e)
            })
    })
}
