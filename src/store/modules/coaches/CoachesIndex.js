import CoachesMutations from './CoachesMutations.js';
import CoachesGetters from './CoachesGetters.js';
import CoachesActions from './CoachesActions.js';

const coachstate = {
    namespaced: true,
    state: () => ({
        coaches: [
            {
                id: 'c1',
                firstName: 'Maximilian',
                lastName: 'Schwarzmüller',
                areas: ['frontend', 'backend', 'career'],
                description:
                    "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
                hourlyRate: 30
            },
            {
                id: 'c2',
                firstName: 'Julie',
                lastName: 'Jones',
                areas: ['backend', 'career'],
                description:
                    'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
                hourlyRate: 20
            },
            {
                id: 'c3',
                firstName: 'Adi',
                lastName: 'Nugroho',
                areas: ['backend'],
                description:
                    'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
                hourlyRate: 70
            },
            {
                id: 'c4',
                firstName: 'Mbul',
                lastName: 'Jelek',
                areas: ['career'],
                description:
                    'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
                hourlyRate: 10
            },
            {
                id: 'c5',
                firstName: 'Astri',
                lastName: 'Cantik',
                areas: ['frontend'],
                description:
                    'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
                hourlyRate: 40
            },
        ]
    }),
    mutations: CoachesMutations,
    getters: CoachesGetters,
    actions: CoachesActions
}

export default coachstate;