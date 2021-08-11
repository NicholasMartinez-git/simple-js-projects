
"use strict";

(function () {

    const users = [
        {
            id: 1,
            firstName: 'John',
            lastName: 'Smith',
            fullName: function () {
                return this.firstName + " " + this.lastName;
            },
            imageURL: 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
            occupation: 'Web Developer',
            review: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.'
        },
        {
            id: 2,
            firstName: 'Jacob',
            lastName: 'Schmidt',
            fullName: function () {
                return this.firstName + " " + this.lastName;
            },
            imageURL: 'https://images.pexels.com/photos/4330308/pexels-photo-4330308.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            occupation: 'Programmer',
            review: 'First, solve the problem. Then, write the code'
        },
        {
            id: 3,
            firstName: 'Jack',
            lastName: 'Hill',
            fullName: function () {
                return this.firstName + " " + this.lastName;
            },
            imageURL: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            occupation: 'Software Developer',
            review: 'Before software can be reusable it first has to be usable.'
        },
        {
            id: 4,
            firstName: 'Jill',
            lastName: 'Hill',
            fullName: function () {
                return this.firstName + " " + this.lastName;
            },
            imageURL: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            occupation: 'Front-End Developer',
            review: 'Optimism is an occupational hazard of programming: feedback is the treatment.'
        },
        {
            id: 5,
            firstName: 'Rebecca',
            lastName: 'Purple',
            fullName: function () {
                return this.firstName + " " + this.lastName;
            },
            imageURL: 'https://images.pexels.com/photos/3541389/pexels-photo-3541389.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            occupation: 'Back-End Developer',
            review: 'Java is to JavaScript what car is to Carpet.'
        },
    ]

    // Random index from users[]
    function randomUser() {
        let randomUserIndex = Math.floor(Math.random() * users.length);
        return randomUserIndex;
    }
    
    
    // Select items
    const userImg = document.getElementById("user-image");
    const userName = document.getElementById("user-name");
    const userOccupation = document.getElementById("user-occupation");
    const userReview = document.getElementById("user-review");

    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const randomBtn = document.querySelector(".random-btn");

    // Set starting user
    let currentUser = 0;

    // Load initial user
    window.addEventListener('DOMContentLoaded', () => {
        showUser(currentUser);
    });

    // Show user
    function showUser() {
        const person = users[currentUser];
        userImg.src = person.imageURL;
        userName.textContent = person.fullName();
        userOccupation.textContent = person.occupation;
        userReview.textContent = person.review;
    }

    // Next user
    nextBtn.addEventListener("click", () => {
        currentUser++;
        if (currentUser > users.length - 1) {
            currentUser = 0;
        }
        showUser(currentUser);
    })

    // Prev user
    prevBtn.addEventListener("click", () => {
        currentUser--;
        if (currentUser < 0) {
            currentUser = users.length - 1;
        }
        showUser(currentUser);
    })

    // Random user
    randomBtn.addEventListener("click", () => {
        currentUser = randomUser();
        showUser(currentUser);
    })
})();