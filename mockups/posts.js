import {USERS} from './users';

export const POSTS = [
{
    imageUrl: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600',
    user: USERS[0].username,
    likes: 1980,
    caption: 'What is your favorite Programming language ?',
    profile_picture: USERS[0].avatar,
    comments:[
        {
            user: USERS[1].username,
            comment: 'Wow! Its Wonderful'
        },
        {
            user: USERS[2].username,
            comment: 'I like React Native programming '
        },

    ]

},
{
    imageUrl: 'https://images.pexels.com/photos/459653/pexels-photo-459653.jpeg?auto=compress&cs=tinysrgb&w=600',
    user: USERS[1].username,
    likes: 867,
    caption: 'This is my workspace. Do you like it?',
    profile_picture: USERS[1].avatar,
    comments:[
        {
            user: USERS[4].username,
            comment: 'It is the perfect space'
        },
        {
            user: USERS[5].username,
            comment: 'I dont like this color '
        },

    ]

},
{
    imageUrl: 'https://images.pexels.com/photos/2422286/pexels-photo-2422286.jpeg?auto=compress&cs=tinysrgb&w=600',
    user: USERS[3].username,
    likes: 580,
    caption: 'What do you work?',
    profile_picture: USERS[2].avatar,
    comments:[
        {
            user: USERS[6].username,
            comment: 'Wow! Its Wonderful'
        },
        {
            user: USERS[7].username,
            comment: 'I like React Native programming '
        },

    ]

},


]