
const courses = [
    {
        "id": "1",
        "question": "The mausoleum is ................. by Thien Thu mountain, two towering columns and a vast expanse of water",
        "correct": 3,
        "answers": [
            {
                "id": "1",
                "answer": "feed"
            },
            {
                "id": "2",
                "answer": "feeding"
            },
            {
                "id": "3",
                "answer": "fed"
            },
            {
                "id": "4",
                "answer": "feeds"
            }
        ]
    },
    {
        "id": "2",
        "question": "Put plants ............... a window so that they will get enough light.",
        "correct": 3,
        "answers": [
            {
                "id": "1",
                "answer": "near to"
            },
            {
                "id": "2",
                "answer": "near of"
            },
            {
                "id": "3",
                "answer": "next to"
            },
            {
                "id": "4",
                "answer": "nearly"
            }
        ]
    },
    {
        "id": "3",
        "question": "Employers often require that candidates have not only a degree ............",
        "correct": 1,
        "answers": [
            {
                "id": "1",
                "answer": "but also two-year experience"
            },
            {
                "id": "2",
                "answer": "aslo two years experience"
            },
            {
                "id": "3",
                "answer": "but also two-year experience"
            },
            {
                "id": "4",
                "answer": " but more two years experience"
            }
        ]
    },
    {
        "id": "4",
        "question": "richarc Nixon had been a lawyer and ...... before he entered plitics.",
        "correct": 2,
        "answers": [
            {
                "id": "1",
                "answer": "served in the Navy as an officer"
            },
            {
                "id": "2",
                "answer": "an officer in the Navy"
            },
            {
                "id": "3",
                "answer": "did service in the navy as an officer"
            },
            {
                "id": "4",
                "answer": "the Navy had him as an officer"
            }
        ]
    },
    {
        "id": "5",
        "question": "If one of the participants in a conversation wonders ....  no real communication has taken place ",
        "correct": 2,
        "answers": [
            {
                "id": "1",
                "answer": "what said the other person "
            },
            {
                "id": "2",
                "answer": "what the other person said"
            },
            {
                "id": "3",
                "answer": "what did the other person say"
            },
            {
                "id": "4",
                "answer": "what was the other person saying"
            }
        ]
    },
    {
        "id": "6",
        "question": "The salary of a bus dirver is much higher.........",
        "correct": 3,
        "answers": [
            {
                "id": "1",
                "answer": "in comparison with the salary of a teacher"
            },
            {
                "id": "2",
                "answer": "than a teacher"
            },
            {
                "id": "3",
                "answer": "than that of a teacher"
            },
            {
                "id": "4",
                "answer": "to compare as a teacher"
            }
        ]
    },
    {
        "id": "7",
        "question": "Professional people expect ..... when it is neccessary to cancel an appointment.",
        "correct": 1,
        "answers": [
            {
                "id": "1",
                "answer": "you to call them"
            },
            {
                "id": "2",
                "answer": "that you would call them"
            },
            {
                "id": "3",
                "answer": "your calling them "
            },
            {
                "id": "4",
                "answer": "that you are calling them"
            }
        ]
    },
    {
        "id": "8",
        "question": "Sedunebtart rocks are formed below the surface of the earth ....... very high temperatures and pressures.",
        "correct": 3,
        "answers": [
            {
                "id": "1",
                "answer": "where there are "
            },
            {
                "id": "2",
                "answer": "there are"
            },
            {
                "id": "3",
                "answer": "where are there"
            },
            {
                "id": "4",
                "answer": "there are where"
            }
        ]
    },
    {
        "id": "9",
        "question": "Farmer look forward to ..... every summer",
        "correct": 1,
        "answers": [
            {
                "id": "1",
                "answer": "participating in the county fairs"
            },
            {
                "id": "2",
                "answer": "paricipate in the county fairs"
            },
            {
                "id": "3",
                "answer": "be participating in the county fairs"
            },
            {
                "id": "4",
                "answer": "have participated in the county fairs"
            }
        ]
    },
    {
        "id": "10",
        "question": "Clipper ships were the swiftest sailing ships that .... .to sea and the most beautyful.",
        "correct": 1,
        "answers": [
            {
                "id": "1",
                "answer": "were ever put "
            },
            {
                "id": "2",
                "answer": "ever were put"
            },
            {
                "id": "3",
                "answer": "were ever putted"
            },
            {
                "id": "4",
                "answer": "ever were putted"
            }
        ]
    },
     {
        "id": "11",
        "question": "Clipper ships were the swiftest sailing ships that .... .to sea and the most beautyful.",
        "correct": 1,
        "answers": [
            {
                "id": "1",
                "answer": "were ever put "
            },
            {
                "id": "2",
                "answer": "ever were put"
            },
            {
                "id": "3",
                "answer": "were ever putted"
            },
            {
                "id": "4",
                "answer": "ever were putted"
            }
        ]
    },
     {
        "id": "12",
        "question": "Clipper ships were the swiftest sailing ships that .... .to sea and the most beautyful.",
        "correct": 1,
        "answers": [
            {
                "id": "1",
                "answer": "were ever put "
            },
            {
                "id": "2",
                "answer": "ever were put"
            },
            {
                "id": "3",
                "answer": "were ever putted"
            },
            {
                "id": "4",
                "answer": "ever were putted"
            }
        ]
    }
]


export default  () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(courses)
    }, 1000)
  })
}