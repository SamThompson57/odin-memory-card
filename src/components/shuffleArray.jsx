export default function shuffleArray(arr){
    let shuffleArr = []
    while(arr.length > 0){
        const i = Math.floor(Math.random() * arr.length)
        shuffleArr.push(arr[i])
        arr.splice(i,1)
    }

    return shuffleArr
}