let users = [
    {
        firstName: 'John',
        lastName: 'Smith',
        fullName: function () {
            return this.firstName + " " + this.lastName;
        },
        imageFile: 'pexels-john-smith.jpg',
        occupation: 'Web Developer',
        quote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.'
    }
]