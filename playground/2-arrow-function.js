const square = function (x) {
    return x * x
}

const arrowSquare = (x) => {
    return x * x
}

const arrowSquare1 = (x) => x * x

console.log(square(3))
console.log(arrowSquare(4))
console.log(arrowSquare1(5))

const event = {
    name: 'Birthday Party',
    guestList: ['Andrew', 'Jen', 'Mike'],
    printGuestList() {
        console.log('Guest list for ' + this.name)

        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGuestList()
