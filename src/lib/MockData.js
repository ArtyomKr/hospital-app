const APPOINTMENTS = [
    {
        date: 1584422234489,
        time: 1584422234489,
        client: "Петров Петр Петрович",
        status: 0,
        doctor: "Иванов Иван Иванович",
        complaints: "Синдром Туррета",
        diagnosis: "Биполярное расстройство"
    },
    {
        date: 1580492154454,
        time: 1580492154454,
        client: "Петров Петр Петрович",
        status: 0,
        doctor: "Иванов Иван Иванович",
        complaints: "Бессоница",
        diagnosis: "Биполярное расстройство"
    },
    {
        date: 1520424045514,
        time: 1520424045514,
        client: "Гольдеров Вассарион Вассарионович",
        status: 1,
        doctor: "Иванов Иван Иванович",
        complaints: "Тахикардия",
        diagnosis: "Сердечная аритмия"
    },
    {
        date: 1560422294431,
        time: 1560422294431,
        client: "Гольдперов Вассарион Вассарионович",
        status: 4,
        doctor: "Петров Денис Петрович",
        complaints: "Бессоница",
        diagnosis: "Депрессия"
    },
  ];

const appointmentsStatuses = [
    { id: 0, title: 'Завершён' },
    { id: 1, title: 'Ожидается' },
    { id: 2, title: 'Пропущен' },
    { id: 3, title: 'Отменён' },
    { id: 4, title: 'Перенесён' },
    { id: 5, title: 'Активен' }
];

const users = [
    { login:'123', password:'123', name: 'Иванов Иван Иванович' },
    { login:'111', password:'111', name: 'Петров Денис Петрович' }
];

const events = [
    {
        title:'Совещание',
        date: 1560422694514,
        time: '18:40',
        place: 'каб. 406',
        from: 'Администрация',
        text: 'Совещание для всех по поводу короновируса'
    },
    {
        title:'Раздача масок',
        date: 1540424304514 ,
        time: '8:40',
        place: 'каб. 101',
        from: 'Администрация',
        text: 'Раздача медицинских масок в связи с распространением вируса'
    },
    {
        title:'Корпоратив',
        date: 1520424004514,
        time: '10:40',
        place: 'каб. 202',
        from: 'Администрация',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        title:'Сокращённый рабочий день',
        date: 1500444304514,
        time: '10:40',
        place: 'каб. 202',
        from: 'Администрация',
        text: 'В связи с праздниками рабочий день будет сокращен'
    },
    {
        title:'Событие',
        date: 1500444304514,
        time: '10:40',
        place: 'каб. 202',
        from: 'Администрация',
        text: 'Curabitur imperdiet id enim non porta. In suscipit dapibus velit, et imperdiet quam aliquet ut. Ut vel magna non erat pulvinar faucibus. Morbi rutrum sagittis sem ullamcorper dictum. Integer ultrices nibh in mauris suscipit, sed consectetur felis sollicitudin. Sed cursus non nisi in volutpat. Duis feugiat placerat sem. Nulla aliquam faucibus tortor sit amet hendrerit. Suspendisse eget hendrerit risus. Vivamus nulla sapien, vulputate ut hendrerit vel, feugiat at mauris. Phasellus porttitor erat in congue dictum. Nunc mattis nulla in magna tincidunt vehicula.'
    },
    {
        title:'Событие',
        date: 1500444304514,
        time: '10:40',
        place: 'каб. 202',
        from: 'Администрация',
        text: 'Fusce vitae malesuada nisl, ut ultricies turpis. Cras iaculis nisi nec egestas suscipit. Vestibulum lobortis suscipit porta. Praesent id posuere ante. Cras tortor est, eleifend sit amet iaculis eget, molestie eget orci. Morbi eget eleifend odio, sed volutpat ipsum. Vivamus et ullamcorper dolor. Donec ut elementum elit. Cras felis est, sodales porta dolor ut, iaculis aliquet ligula. Duis nec ligula euismod, euismod lorem eu, lacinia justo. Suspendisse pretium turpis et nisl pulvinar, vitae elementum tortor accumsan. Aliquam commodo, sem eu porttitor sollicitudin, velit arcu iaculis tellus, at vestibulum erat leo in nulla. Vivamus ornare finibus risus eu commodo. Ut quis lectus venenatis, semper tortor vel, hendrerit sapien. Curabitur id diam quis dui mollis auctor nec id ligula. Integer a mi sapien.'
    },

];

const employees = [
    {
        name: 'Иванов Иван Иванович',
        birth: '21.09.1985',
        position: 'Врач-психиатр участковый',
        tel: '+375 44 321 45 67',
        email: 'IvanovIvanIvanovich@gmail.com',
        adress: 'ул. Пушкина, д. Колотушкина 51',
        image: '/images/Employees/doc1.jpg'
    },
    {
        name: 'Гольдеров Вассарион Вассарионович',
        birth: '23.01.1965',
        position: 'Врач-педиатр участковый',
        tel: '+375 44 321 45 67',
        email: 'Golderov@gmail.com',
        adress: 'ул. Михайлова, д. 5',
        image: '/images/Employees/doc2.jpg'
    },
    {
        name: 'Петров Петр Петрович',
        birth: '21.09.1975',
        position: 'Офтальмолог',
        tel: '+375 44 321 45 67',
        email: 'PetrovPeterPetrovich@gmail.com',
        adress: 'ул. Светова, д. 51',
        image: '/images/Employees/doc3.jpg'
    },
];

export function getAppointmentsStatuses(){
    return appointmentsStatuses
}

export function getAppointments(params){
    const {
        startDate,
        endDate,
        patientName,
        onlyMe,
        status,
        username
    } = params;

    return APPOINTMENTS.filter((item)=>{
        return (
            (startDate? item.date > startDate : true) &&
            (endDate? item.date < endDate : true) &&
            (patientName? (patientName.length > 2? item.client.includes(patientName) : true) : true) &&
            (onlyMe? item.doctor.includes(username) : true) &&
            (status? (+status >= 0? (item.status === +status) : true) : true)
        )
    })
}

export function login({login, password}){
    let response = {
        result: {
            type: 'user_not_found',
            message:'Пользователь не найден'
            },
        success: false};

    users.forEach(
        (user)=>{
            if (user.login === login) {
                if (user.password === password) {
                    response = {result: {login: login, name: user.name}, success: true};
                } else  response = {
                    result: {
                        type: 'incorrect_password',
                        message:'Неверный пароль'
                    },
                    success: false};
            }
        });

    return response
}

export function getEvents(){
    return events
}

export function getEmployees(){
    return employees
}