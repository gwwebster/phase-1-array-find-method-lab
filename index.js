function superbowlWin(record) {
    let year
    record.find(element => {
        if (element.result === 'W'){
            year = element.year
            return true
        }
    })
    return year
}
