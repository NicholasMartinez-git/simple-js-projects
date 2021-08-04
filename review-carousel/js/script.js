
"use strict";

(function () {

    const users = [
        {
            firstName: 'John',
            lastName: 'Smith',
            fullName: function () {
                return this.firstName + " " + this.lastName;
            },
            imagePath: '/review-carousel/img/pexels-john-smith.jpg',
            occupation: 'Web Developer',
            quote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.'
        },
        {
            firstName: 'Jacob',
            lastName: 'Schmidt',
            fullName: function () {
                return this.firstName + " " + this.lastName;
            },
            imagePath: '/review-carousel/img/pexels-jacob-schmidt.jpg',
            occupation: 'Programmer',
            quote: 'First, solve the problem. Then, write the code'
        },
        {
            firstName: 'Jack',
            lastName: 'Hill',
            fullName: function () {
                return this.firstName + " " + this.lastName;
            },
            imagePath: '/review-carousel/img/pexels-jack-hill.jpg',
            occupation: 'Software Developer',
            quote: 'Before software can be reusable it first has to be usable.'
        },
        {
            firstName: 'Jill',
            lastName: 'Hill',
            fullName: function () {
                return this.firstName + " " + this.lastName;
            },
            imagePath: '/review-carousel/img/pexels-jill-hill.jpg',
            occupation: 'Front-End Developer',
            quote: 'Optimism is an occupational hazard of programming: feedback is the treatment.'
        },
        {
            firstName: 'Rebecca',
            lastName: 'Purple',
            fullName: function () {
                return this.firstName + " " + this.lastName;
            },
            imagePath: '/review-carousel/img/pexels-rebecca-purple.jpg',
            occupation: 'Back-End Developer',
            quote: 'Java is to JavaScript what car is to Carpet.'
        },
    ]

    const randomImage = []

    function randomUser() {
        let randomUserIndex = Math.floor(Math.random() * users.length);
        return randomUserIndex;
    }
    
    function displayUsers() {

        let i = 0;
        let image = document.getElementById('image');
        image.src = users[i].imagePath

        let leftArrow = document.getElementById('leftArrow');
        let rightArrow = document.getElementById('rightArrow');
        let random = document.getElementById('surprise-btn');

        leftArrow.addEventListener('click', function () {

            if (i = 0) {
                i = users.length - 1;
                document.getElementById('image').src = "/review-carousel/img/" + users[i].imageFile;
            } else {
                i--;
                document.getElementById('image').src = "/review-carousel/img/" + users[i].imageFile;
            }

        });

        rightArrow.addEventListener('click', function () {

            if (i = (users.length - 1)) {
                i = 0;
                document.getElementById('image').src = "/review-carousel/img/" + users[i].imageFile;
            } else {
                i++;
                document.getElementById('image').src = "/review-carousel/img/" + users[i].imageFile;
            }

        });

        random.addEventListener('click', function () {
            
        });
    }

    displayUsers();
})();