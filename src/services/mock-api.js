import _ from 'lodash'

export default class MockApi {
    constructor() {
        this.myInfo = {
            id: 'axczxa13123',
            name: "Zhenya",
            sename: "Bamovski",
            age: 21,
            birth_day: 2,
            birth_month: 10,
            birth_year: 1998,
            email: "alesha@gmail.com",
            group: '123'
        };

        
        this.subjects = [
            {
                id: 1,
                name: 'Math',
                description: 'Math is the mother of all subjects',
                teacher: {
                    name: 'Vladimir Petrovich',
                    years: 55,
                },
            },
            {
                id: 2,
                name: 'PE',
                description: 'PE ASDASDASDASDSAD',
                teacher: {
                    name: 'Vladimir Petrovich',
                    years: 55,
                },
            },
            {
                id: 3,
                name: 'Informatics',
                description: 'Math is the mother of all subjects',
                teacher: {
                    name: 'Vladimir Petrovich',
                    years: 55,
                },
            },
            {
                id: 4,
                name: 'Biology',
                description: 'Biology is so interesting',
                teacher: {
                    name: 'Vladimir Petrovich',
                    years: 55,
                }
            },
        ]

        this.students = [
            {
                id: "axczxa13123",
                name: "Alesha",
                sename: "Popovich",
                age: 21,
                birth_day: 2,
                birth_month: 10,
                birth_year: 1998,
                email: "alesha@gmail.com",
                group: '123'
            },
            {
                id: "sazcxeg123sa",
                name: "Semen",
                sename: "Petrovich",
                age: 21,
                birth_day: 2,
                birth_month: 10,
                birth_year: 1999,
                email: "petrovich@gmail.com",
                group: '123'
            },
            {
                id: "zxbtenhgl567",
                name: "Adbula",
                sename: "Rahmetovich",
                age: 23,
                birth_day: 4,
                birth_month: 5,
                birth_year: 1997,
                email: "abdula@gmail.com",
                group: '123'
            },
            {
                id: "asczqsd234123",
                name: "Pavlo",
                sename: "Pavlovich",
                age: 22,
                birth_day: 3,
                birth_month: 11,
                birth_year: 1996,
                email: "pavlovich@gmail.com",
                group: '123'
            },
        ]

        this.teachers = [
            {
                id: "123sadsxvsdaAdsadSAD",
                first_name: "Ivan",
                last_name: "Kuznec",
                photo: 'https://picsum.photos/200/300',
                age: 70,
                birth_day: 2,
                birth_month: 10,
                birth_year: 1998,
                email: "kuznec@gmail.com",
                faculty: null,
            },
            {
                id: "Xaszxf1fvx3qsfsd",
                first_name: "Petr",
                last_name: "Petrovich",
                photo: 'https://picsum.photos/200/300',
                age: 25,
                birth_day: 2,
                birth_month: 10,
                birth_year: 2010,
                email: "petrovich@gmail.com",
                faculty: null,
            },
            {
                id: "asdxzvbrsSAF2fdsg34x0",
                first_name: "Andrey",
                last_name: "Andreevich",
                photo: 'https://picsum.photos/200/300',
                age: 45,
                birth_day: 2,
                birth_month: 10,
                birth_year: 1970,
                email: "andrey@gmail.com",
                faculty: null,
            },
        ];
        
        this.groups = [
            {
                id: '12',
                name: "KI-15-5",
                course_number: 4,
                headman: {
                    id: "axczxa13123",
                    name: "Alesha",
                    sename: "Popovich",
                    age: 21,
                    birth_day: 2,
                    birth_month: 10,
                    birth_year: 1998,
                    email: "alesha@gmail.com",
                    group: null
                },
                curator: {
                    id: "123sadsxvsdaAdsadSAD",
                    first_name: "Ivan",
                    last_name: "Kuznec",
                    photo: 'https://picsum.photos/200/300',
                    age: 70,
                    birth_day: 2,
                    birth_month: 10,
                    birth_year: 1998,
                    email: "kuznec@gmail.com",
                    faculty: null,
                },
                average_ball: 78,
                best: {},
                flow: {},
                students: this.students,
            },
            {
                id: '123',
                name: "KI-15-4",
                course_number: 2,
                headman: {
                    id: 'axczxa13123',
                    name: "Alesha",
                    sename: "Popovich",
                    age: 21,
                    birth_day: 2,
                    birth_month: 10,
                    birth_year: 1998,
                    email: "alesha@gmail.com",
                    group: null
                },
                curator: {
                    id: "123sadsxvsdaAdsadSAD",
                    first_name: "Ivan",
                    last_name: "Kuznec",
                    photo: 'https://picsum.photos/200/300',
                    age: 70,
                    birth_day: 2,
                    birth_month: 10,
                    birth_year: 1998,
                    email: "kuznec@gmail.com",
                    faculty: null,
                },
                average_ball: 65,
                best: {},
                flow: {},
                students: this.students,
            },
            {
                id: "1234",
                name: "KI-15-5",
                course_number: 4,
                headman: {
                    name: "Alesha",
                    sename: "Popovich",
                    age: 21,
                    birth_day: 2,
                    birth_month: 10,
                    birth_year: 1998,
                    email: "alesha@gmail.com",
                    group: null
                },
                curator: {
                    id: "123sadsxvsdaAdsadSAD",
                    first_name: "Ivan",
                    last_name: "Kuznec",
                    photo: 'https://picsum.photos/200/300',
                    age: 70,
                    birth_day: 2,
                    birth_month: 10,
                    birth_year: 1998,
                    email: "kuznec@gmail.com",
                    faculty: null,
                },
                average_ball: 78,
                best: {},
                flow: {},
                students: this.students,
            },
            {
                id: "12345",
                name: "KI-15-5",
                course_number: 4,
                headman: {
                    id: "axczxa13123",
                    name: "Alesha",
                    sename: "Popovich",
                    age: 21,
                    birth_day: 2,
                    birth_month: 10,
                    birth_year: 1998,
                    email: "alesha@gmail.com",
                    group: null
                },
                curator: {
                    id: "123sadsxvsdaAdsadSAD",
                    first_name: "Ivan",
                    last_name: "Kuznec",
                    photo: 'https://picsum.photos/200/300',
                    age: 70,
                    birth_day: 2,
                    birth_month: 10,
                    birth_year: 1998,
                    email: "kuznec@gmail.com",
                    faculty: null,
                },
                average_ball: 78,
                best: {},
                flow: {},
                students: this.students,
            },
        ]
    }

    getAllTeachers() {
        return this.teachers;
    }

    getAllStudents() {
        return this.students;
    }

    getAverageMark() {
        return 10;
    }

    getAllSubjects = async () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.subjects);
            }, 700);
        });
    }
    
    getMyInfo = async () => {
        return this.myInfo;
    }

    getAllGroups = async () => {
        return this.groups;
    }

    getGroupById = async (id) => {
        return _.filter(this.groups, (group) => group.id === id);
    }   
}