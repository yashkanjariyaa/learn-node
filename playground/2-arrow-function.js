const event = {
    name: 'Birthday',
    guestList: ['Nishu', 'Reevaa', 'Vedant'],
    printGuestList : function() {
        console.log('Guest list for ' + this.name)
        
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}
event.printGuestList()