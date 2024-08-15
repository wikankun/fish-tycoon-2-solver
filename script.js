const finDict = {
    "Bluetip": {
        "Bluetip": "Bluetip", "Canary": "Sapphire", "Crimson": "Rusty", "Daffodil": "Pink", "Hooked": "Royal",
        "Greenfin": "Greenfin", "Imperial": "Pink", "Orange": "Greenfin", "Oriental": "Crimson", "Peachy": "Royal",
        "Pink": "Tangerine", "Razorback": "Sapphire", "Royal": "Crimson", "Rusty": "Orange", "Sapphire": "Rusty",
        "Serrated": "Striped", "Silky": "Oriental", "Snubbed": "Striped", "Spined": "Bluetip", "Striped": "Tangerine",
        "Tangerine": "Orange"
    },
    "Canary": {
        "Bluetip": "Sapphire", "Canary": "Canary", "Crimson": "Pink", "Daffodil": "Snubbed", "Hooked": "Daffodil",
        "Greenfin": "Sapphire", "Imperial": "Serrated", "Orange": "Striped", "Oriental": "Canary", "Peachy": "Serrated",
        "Pink": "Oriental", "Razorback": "Razorback", "Royal": "Oriental", "Rusty": "Striped", "Sapphire": "Royal",
        "Serrated": "Snubbed", "Silky": "Daffodil", "Snubbed": "Razorback", "Spined": "Crimson", "Striped": "Royal",
        "Tangerine": "Pink"
    },
    "Crimson": {
        "Bluetip": "Rusty", "Canary": "Pink", "Crimson": "Crimson", "Daffodil": "Oriental", "Hooked": "Razorback",
        "Greenfin": "Rusty", "Imperial": "Canary", "Orange": "Tangerine", "Oriental": "Pink", "Peachy": "Canary",
        "Pink": "Striped", "Razorback": "Royal", "Royal": "Striped", "Rusty": "Tangerine", "Sapphire": "Sapphire",
        "Serrated": "Oriental", "Silky": "Razorback", "Snubbed": "Royal", "Spined": "Orange", "Striped": "Sapphire",
        "Tangerine": "Crimson"
    },
    "Daffodil": {
        "Bluetip": "Pink", "Canary": "Snubbed", "Crimson": "Oriental", "Daffodil": "Daffodil", "Hooked": "Peachy",
        "Greenfin": "Pink", "Imperial": "Imperial", "Orange": "Royal", "Oriental": "Snubbed", "Peachy": "Imperial",
        "Pink": "Razorback", "Razorback": "Snubbed", "Royal": "Razorback", "Rusty": "Royal", "Sapphire": "Canary",
        "Serrated": "Daffodil", "Silky": "Peachy", "Snubbed": "Serrated", "Spined": "Striped", "Striped": "Canary",
        "Tangerine": "Oriental"
    },
    "Hooked": {
        "Bluetip": "Royal", "Canary": "Daffodil", "Crimson": "Razorback", "Daffodil": "Peachy", "Hooked": "Hooked",
        "Greenfin": "Oriental", "Imperial": "Peachy", "Orange": "Orange", "Oriental": "Serrated", "Peachy": "Hooked",
        "Pink": "Snubbed", "Razorback": "Daffodil", "Royal": "Serrated", "Rusty": "Canary", "Sapphire": "Razorback",
        "Serrated": "Imperial", "Silky": "Silky", "Snubbed": "Imperial", "Spined": "Royal", "Striped": "Snubbed",
        "Tangerine": "Canary"
    },
    "Greenfin": {
        "Bluetip": "Greenfin", "Canary": "Sapphire", "Crimson": "Rusty", "Daffodil": "Pink", "Hooked": "Oriental",
        "Greenfin": "Greenfin", "Imperial": "Royal", "Orange": "Oriental", "Oriental": "Sapphire", "Peachy": "Royal",
        "Pink": "Crimson", "Razorback": "Striped", "Royal": "Crimson", "Rusty": "Orange", "Sapphire": "Tangerine",
        "Serrated": "Pink", "Silky": "Oriental", "Snubbed": "Striped", "Spined": "Bluetip", "Striped": "Tangerine",
        "Tangerine": "Rusty"
    },
    "Imperial": {
        "Bluetip": "Pink", "Canary": "Serrated", "Crimson": "Canary", "Daffodil": "Imperial", "Hooked": "Peachy",
        "Greenfin": "Royal", "Imperial": "Imperial", "Orange": "Royal", "Oriental": "Snubbed", "Peachy": "Peachy",
        "Pink": "Razorback", "Razorback": "Serrated", "Royal": "Snubbed", "Rusty": "Oriental", "Sapphire": "Canary",
        "Serrated": "Daffodil", "Silky": "Hooked", "Snubbed": "Daffodil", "Spined": "Pink", "Striped": "Razorback",
        "Tangerine": "Oriental"
    },
    "Orange": {
        "Bluetip": "Greenfin", "Canary": "Striped", "Crimson": "Tangerine", "Daffodil": "Royal", "Hooked": "Orange",
        "Greenfin": "Orange", "Imperial": "Royal", "Orange": "Orange", "Oriental": "Sapphire", "Peachy": "Oriental",
        "Pink": "Crimson", "Razorback": "Striped", "Royal": "Sapphire", "Rusty": "Rusty", "Sapphire": "Tangerine",
        "Serrated": "Pink", "Silky": "Canary", "Snubbed": "Pink", "Spined": "Greenfin", "Striped": "Crimson",
        "Tangerine": "Rusty"
    },
    "Oriental": {
        "Bluetip": "Crimson", "Canary": "Canary", "Crimson": "Pink", "Daffodil": "Snubbed", "Hooked": "Serrated",
        "Greenfin": "Sapphire", "Imperial": "Snubbed", "Orange": "Sapphire", "Oriental": "Oriental", "Peachy": "Serrated",
        "Pink": "Royal", "Razorback": "Canary", "Royal": "Oriental", "Rusty": "Striped", "Sapphire": "Pink",
        "Serrated": "Razorback", "Silky": "Daffodil", "Snubbed": "Razorback", "Spined": "Crimson", "Striped": "Royal",
        "Tangerine": "Striped"
    },
    "Peachy": {
        "Bluetip": "Royal", "Canary": "Serrated", "Crimson": "Canary", "Daffodil": "Imperial", "Hooked": "Hooked",
        "Greenfin": "Royal", "Imperial": "Peachy", "Orange": "Oriental", "Oriental": "Serrated", "Peachy": "Peachy",
        "Pink": "Snubbed", "Razorback": "Daffodil", "Royal": "Snubbed", "Rusty": "Oriental", "Sapphire": "Canary",
        "Serrated": "Razorback", "Silky": "Hooked", "Snubbed": "Daffodil", "Spined": "Pink", "Striped": "Razorback",
        "Tangerine": "Canary"
    },
    "Pink": {
        "Bluetip": "Tangerine", "Canary": "Oriental", "Crimson": "Striped", "Daffodil": "Razorback", "Hooked": "Snubbed",
        "Greenfin": "Crimson", "Imperial": "Razorback", "Orange": "Crimson", "Oriental": "Royal", "Peachy": "Snubbed",
        "Pink": "Pink", "Razorback": "Oriental", "Royal": "Royal", "Rusty": "Sapphire", "Sapphire": "Striped",
        "Serrated": "Canary", "Silky": "Serrated", "Snubbed": "Canary", "Spined": "Tangerine", "Striped": "Pink",
        "Tangerine": "Sapphire"
    },
    "Razorback": {
        "Bluetip": "Sapphire", "Canary": "Razorback", "Crimson": "Royal", "Daffodil": "Snubbed", "Hooked": "Daffodil",
        "Greenfin": "Striped", "Imperial": "Serrated", "Orange": "Striped", "Oriental": "Canary", "Peachy": "Daffodil",
        "Pink": "Oriental", "Razorback": "Razorback", "Royal": "Canary", "Rusty": "Pink", "Sapphire": "Royal",
        "Serrated": "Snubbed", "Silky": "Imperial", "Snubbed": "Snubbed", "Spined": "Sapphire", "Striped": "Oriental",
        "Tangerine": "Pink"
    },
    "Royal": {
        "Bluetip": "Crimson", "Canary": "Oriental", "Crimson": "Striped", "Daffodil": "Razorback", "Hooked": "Serrated",
        "Greenfin": "Crimson", "Imperial": "Snubbed", "Orange": "Sapphire", "Oriental": "Sapphire", "Peachy": "Oriental",
        "Pink": "Royal", "Razorback": "Canary", "Royal": "Royal", "Rusty": "Sapphire", "Sapphire": "Pink",
        "Serrated": "Razorback", "Silky": "Serrated", "Snubbed": "Canary", "Spined": "Tangerine", "Striped": "Pink",
        "Tangerine": "Striped"
    },
    "Rusty": {
        "Bluetip": "Orange", "Canary": "Striped", "Crimson": "Tangerine", "Daffodil": "Royal", "Hooked": "Canary",
        "Greenfin": "Orange", "Imperial": "Oriental", "Orange": "Rusty", "Oriental": "Striped", "Peachy": "Oriental",
        "Pink": "Sapphire", "Razorback": "Pink", "Royal": "Sapphire", "Rusty": "Rusty", "Sapphire": "Crimson",
        "Serrated": "Royal", "Silky": "Canary", "Snubbed": "Pink", "Spined": "Greenfin", "Striped": "Crimson",
        "Tangerine": "Tangerine"
    },
    "Sapphire": {
        "Bluetip": "Rusty", "Canary": "Royal", "Crimson": "Sapphire", "Daffodil": "Canary", "Hooked": "Razorback",
        "Greenfin": "Tangerine", "Imperial": "Canary", "Orange": "Tangerine", "Oriental": "Pink", "Peachy": "Razorback",
        "Pink": "Striped", "Razorback": "Royal", "Royal": "Pink", "Rusty": "Crimson", "Sapphire": "Sapphire",
        "Serrated": "Oriental", "Silky": "Snubbed", "Snubbed": "Oriental", "Spined": "Rusty", "Striped": "Striped",
        "Tangerine": "Crimson"
    },
    "Serrated": {
        "Bluetip": "Striped", "Canary": "Snubbed", "Crimson": "Oriental", "Daffodil": "Daffodil", "Hooked": "Imperial",
        "Greenfin": "Pink", "Imperial": "Daffodil", "Orange": "Pink", "Oriental": "Razorback", "Peachy": "Imperial",
        "Pink": "Canary", "Razorback": "Snubbed", "Royal": "Razorback", "Rusty": "Royal", "Sapphire": "Oriental",
        "Serrated": "Serrated", "Silky": "Peachy", "Snubbed": "Serrated", "Spined": "Striped", "Striped": "Canary",
        "Tangerine": "Royal"
    },
    "Silky": {
        "Bluetip": "Oriental", "Canary": "Daffodil", "Crimson": "Razorback", "Daffodil": "Peachy", "Hooked": "Silky",
        "Greenfin": "Oriental", "Imperial": "Hooked", "Orange": "Canary", "Oriental": "Daffodil", "Peachy": "Hooked",
        "Pink": "Serrated", "Razorback": "Imperial", "Royal": "Serrated", "Rusty": "Canary", "Sapphire": "Snubbed",
        "Serrated": "Peachy", "Silky": "Silky", "Snubbed": "Imperial", "Spined": "Royal", "Striped": "Snubbed",
        "Tangerine": "Razorback"
    },
    "Snubbed": {
        "Bluetip": "Striped", "Canary": "Razorback", "Crimson": "Royal", "Daffodil": "Serrated", "Hooked": "Imperial",
        "Greenfin": "Striped", "Imperial": "Daffodil", "Orange": "Pink", "Oriental": "Razorback", "Peachy": "Daffodil",
        "Pink": "Canary", "Razorback": "Snubbed", "Royal": "Canary", "Rusty": "Pink", "Sapphire": "Sapphire",
        "Serrated": "Serrated", "Silky": "Imperial", "Snubbed": "Snubbed", "Spined": "Sapphire", "Striped": "Oriental",
        "Tangerine": "Royal"
    },
    "Spined": {
        "Bluetip": "Bluetip", "Canary": "Crimson", "Crimson": "Orange", "Daffodil": "Striped", "Hooked": "Royal",
        "Greenfin": "Bluetip", "Imperial": "Pink", "Orange": "Greenfin", "Oriental": "Crimson", "Peachy": "Pink",
        "Pink": "Tangerine", "Razorback": "Sapphire", "Royal": "Tangerine", "Rusty": "Greenfin", "Sapphire": "Rusty",
        "Serrated": "Striped", "Silky": "Royal", "Snubbed": "Sapphire", "Spined": "Spined", "Striped": "Rusty",
        "Tangerine": "Orange"
    },
    "Striped": {
        "Bluetip": "Tangerine", "Canary": "Royal", "Crimson": "Sapphire", "Daffodil": "Canary", "Hooked": "Snubbed",
        "Greenfin": "Tangerine", "Imperial": "Razorback", "Orange": "Crimson", "Oriental": "Royal", "Peachy": "Razorback",
        "Pink": "Pink", "Razorback": "Oriental", "Royal": "Pink", "Rusty": "Crimson", "Sapphire": "Striped",
        "Serrated": "Oriental", "Silky": "Snubbed", "Snubbed": "Oriental", "Spined": "Rusty", "Striped": "Striped",
        "Tangerine": "Sapphire"
    },
    "Tangerine": {
        "Bluetip": "Orange", "Canary": "Pink", "Crimson": "Crimson", "Daffodil": "Oriental", "Hooked": "Canary",
        "Greenfin": "Rusty", "Imperial": "Oriental", "Orange": "Rusty", "Oriental": "Striped", "Peachy": "Canary",
        "Pink": "Sapphire", "Razorback": "Pink", "Royal": "Striped", "Rusty": "Crimson", "Sapphire": "Tangerine",
        "Serrated": "Royal", "Silky": "Snubbed", "Snubbed": "Royal", "Spined": "Orange", "Striped": "Sapphire",
        "Tangerine": "Tangerine"
    }
}

const speciesDict = {
    "Angelfish": {
        "Angelfish": "Angelfish", "Arrowfish": "Fatfish", "Beta": "Comet", "Carp": "Comet", "Catfish": "Fatfish",
        "Comet": "Flashfish", "Fatfish": "Snooper", "Flashfish": "Tigerfish", "Foxface": "Pufferfish",
        "Goldfish": "Stickfish", "Goldshark": "Goldshark", "Leaffish": "Rainbow", "Pufferfish": "Rainbow",
        "Pygmy": "Stickfish", "Rainbow": "Tigerfish", "Shark": "Snout", "Snooper": "Goldshark", "Snout": "Snooper",
        "Spotanus": "Pufferfish", "Stickfish": "Flashfish", "Tigerfish": "Angelfish"
    },
    "Arrowfish": {
        "Angelfish": "Fatfish", "Arrowfish": "Arrowfish", "Beta": "Flashfish", "Carp": "Tigerfish", "Catfish": "Catfish",
        "Comet": "Goldshark", "Fatfish": "Snout", "Flashfish": "Snooper", "Foxface": "Rainbow",
        "Goldfish": "Rainbow", "Goldshark": "Fatfish", "Leaffish": "Tigerfish", "Pufferfish": "Angelfish",
        "Pygmy": "Flashfish", "Rainbow": "Goldshark", "Shark": "Catfish", "Snooper": "Snout", "Snout": "Arrowfish",
        "Spotanus": "Comet", "Stickfish": "Angelfish", "Tigerfish": "Snooper"
    },
    "Beta": {
        "Angelfish": "Comet", "Arrowfish": "Flashfish", "Beta": "Beta", "Carp": "Carp", "Catfish": "Tigerfish",
        "Comet": "Pufferfish", "Fatfish": "Rainbow", "Flashfish": "Stickfish", "Foxface": "Pygmy",
        "Goldfish": "Pygmy", "Goldshark": "Comet", "Leaffish": "Carp", "Pufferfish": "Leaffish",
        "Pygmy": "Beta", "Rainbow": "Pufferfish", "Shark": "Tigerfish", "Snooper": "Rainbow", "Snout": "Flashfish",
        "Spotanus": "Goldfish", "Stickfish": "Leaffish", "Tigerfish": "Stickfish"
    },
    "Carp": {
        "Angelfish": "Comet", "Arrowfish": "Tigerfish", "Beta": "Carp", "Carp": "Carp", "Catfish": "Tigerfish",
        "Comet": "Pufferfish", "Fatfish": "Flashfish", "Flashfish": "Stickfish", "Foxface": "Pygmy",
        "Goldfish": "Beta", "Goldshark": "Rainbow", "Leaffish": "Leaffish", "Pufferfish": "Leaffish",
        "Pygmy": "Beta", "Rainbow": "Stickfish", "Shark": "Angelfish", "Snooper": "Rainbow", "Snout": "Flashfish",
        "Spotanus": "Pygmy", "Stickfish": "Pufferfish", "Tigerfish": "Comet"
    },
    "Catfish": {
        "Angelfish": "Fatfish", "Arrowfish": "Catfish", "Beta": "Tigerfish", "Carp": "Tigerfish", "Catfish": "Catfish",
        "Comet": "Goldshark", "Fatfish": "Arrowfish", "Flashfish": "Snooper", "Foxface": "Rainbow",
        "Goldfish": "Flashfish", "Goldshark": "Snout", "Leaffish": "Angelfish", "Pufferfish": "Angelfish",
        "Pygmy": "Flashfish", "Rainbow": "Snooper", "Shark": "Shark", "Snooper": "Snout", "Snout": "Arrowfish",
        "Spotanus": "Rainbow", "Stickfish": "Goldshark", "Tigerfish": "Fatfish"
    },
    "Comet": {
        "Angelfish": "Flashfish", "Arrowfish": "Goldshark", "Beta": "Pufferfish", "Carp": "Pufferfish", "Catfish": "Goldshark",
        "Comet": "Comet", "Fatfish": "Angelfish", "Flashfish": "Rainbow", "Foxface": "Carp",
        "Goldfish": "Leaffish", "Goldshark": "Tigerfish", "Leaffish": "Stickfish", "Pufferfish": "Stickfish",
        "Pygmy": "Leaffish", "Rainbow": "Rainbow", "Shark": "Snooper", "Snooper": "Tigerfish", "Snout": "Angelfish",
        "Spotanus": "Carp", "Stickfish": "Comet", "Tigerfish": "Flashfish"
    },
    "Fatfish": {
        "Angelfish": "Snooper", "Arrowfish": "Snout", "Beta": "Rainbow", "Carp": "Flashfish", "Catfish": "Arrowfish",
        "Comet": "Angelfish", "Fatfish": "Fatfish", "Flashfish": "Goldshark", "Foxface": "Comet",
        "Goldfish": "Comet", "Goldshark": "Snooper", "Leaffish": "Flashfish", "Pufferfish": "Tigerfish",
        "Pygmy": "Rainbow", "Rainbow": "Angelfish", "Shark": "Arrowfish", "Snooper": "Fatfish", "Snout": "Snout",
        "Spotanus": "Stickfish", "Stickfish": "Tigerfish", "Tigerfish": "Goldshark"
    },
    "Flashfish": {
        "Angelfish": "Tigerfish", "Arrowfish": "Snooper", "Beta": "Stickfish", "Carp": "Stickfish", "Catfish": "Snooper",
        "Comet": "Rainbow", "Fatfish": "Goldshark", "Flashfish": "Flashfish", "Foxface": "Leaffish",
        "Goldfish": "Pufferfish", "Goldshark": "Angelfish", "Leaffish": "Comet", "Pufferfish": "Comet",
        "Pygmy": "Pufferfish", "Rainbow": "Flashfish", "Shark": "Fatfish", "Snooper": "Angelfish", "Snout": "Goldshark",
        "Spotanus": "Leaffish", "Stickfish": "Rainbow", "Tigerfish": "Tigerfish"
    },
    "Foxface": {
        "Angelfish": "Pufferfish", "Arrowfish": "Rainbow", "Beta": "Pygmy", "Carp": "Pygmy", "Catfish": "Rainbow",
        "Comet": "Carp", "Fatfish": "Comet", "Flashfish": "Leaffish", "Foxface": "Foxface",
        "Goldfish": "Goldfish", "Goldshark": "Stickfish", "Leaffish": "Beta", "Pufferfish": "Beta",
        "Pygmy": "Goldfish", "Rainbow": "Leaffish", "Shark": "Flashfish", "Snooper": "Stickfish", "Snout": "Comet",
        "Spotanus": "Foxface", "Stickfish": "Carp", "Tigerfish": "Pufferfish"
    },
    "Goldfish": {
        "Angelfish": "Stickfish", "Arrowfish": "Rainbow", "Beta": "Pygmy", "Carp": "Beta", "Catfish": "Flashfish",
        "Comet": "Leaffish", "Fatfish": "Comet", "Flashfish": "Pufferfish", "Foxface": "Goldfish",
        "Goldfish": "Goldfish", "Goldshark": "Stickfish", "Leaffish": "Beta", "Pufferfish": "Carp",
        "Pygmy": "Pygmy", "Rainbow": "Leaffish", "Shark": "Flashfish", "Snooper": "Comet", "Snout": "Rainbow",
        "Spotanus": "Foxface", "Stickfish": "Carp", "Tigerfish": "Pufferfish"
    },
    "Goldshark": {
        "Angelfish": "Goldshark", "Arrowfish": "Fatfish", "Beta": "Comet", "Carp": "Rainbow", "Catfish": "Snout",
        "Comet": "Tigerfish", "Fatfish": "Snooper", "Flashfish": "Angelfish", "Foxface": "Stickfish",
        "Goldfish": "Stickfish", "Goldshark": "Goldshark", "Leaffish": "Rainbow", "Pufferfish": "Flashfish",
        "Pygmy": "Comet", "Rainbow": "Tigerfish", "Shark": "Snout", "Snooper": "Snooper", "Snout": "Fatfish",
        "Spotanus": "Pufferfish", "Stickfish": "Flashfish", "Tigerfish": "Angelfish"
    },
    "Leaffish": {
        "Angelfish": "Rainbow", "Arrowfish": "Tigerfish", "Beta": "Carp", "Carp": "Leaffish", "Catfish": "Angelfish",
        "Comet": "Stickfish", "Fatfish": "Flashfish", "Flashfish": "Comet", "Foxface": "Beta",
        "Goldfish": "Beta", "Goldshark": "Rainbow", "Leaffish": "Leaffish", "Pufferfish": "Pufferfish",
        "Pygmy": "Carp", "Rainbow": "Stickfish", "Shark": "Angelfish", "Snooper": "Flashfish", "Snout": "Tigerfish",
        "Spotanus": "Pygmy", "Stickfish": "Pufferfish", "Tigerfish": "Comet"
    },
    "Pufferfish": {
        "Angelfish": "Rainbow", "Arrowfish": "Angelfish", "Beta": "Leaffish", "Carp": "Leaffish", "Catfish": "Angelfish",
        "Comet": "Stickfish", "Fatfish": "Tigerfish", "Flashfish": "Comet", "Foxface": "Beta",
        "Goldfish": "Carp", "Goldshark": "Flashfish", "Leaffish": "Pufferfish", "Pufferfish": "Pufferfish",
        "Pygmy": "Carp", "Rainbow": "Comet", "Shark": "Goldfish", "Snooper": "Flashfish", "Snout": "Tigerfish",
        "Spotanus": "Beta", "Stickfish": "Stickfish", "Tigerfish": "Rainbow"
    },
    "Pygmy": {
        "Angelfish": "Stickfish", "Arrowfish": "Flashfish", "Beta": "Beta", "Carp": "Beta", "Catfish": "Flashfish",
        "Comet": "Leaffish", "Fatfish": "Rainbow", "Flashfish": "Pufferfish", "Foxface": "Goldfish",
        "Goldfish": "Pygmy", "Goldshark": "Comet", "Leaffish": "Carp", "Pufferfish": "Carp",
        "Pygmy": "Pygmy", "Rainbow": "Pufferfish", "Shark": "Tigerfish", "Snooper": "Comet", "Snout": "Rainbow",
        "Spotanus": "Goldfish", "Stickfish": "Leaffish", "Tigerfish": "Stickfish"
    },
    "Rainbow": {
        "Angelfish": "Tigerfish", "Arrowfish": "Goldshark", "Beta": "Pufferfish", "Carp": "Stickfish", "Catfish": "Snooper",
        "Comet": "Rainbow", "Fatfish": "Angelfish", "Flashfish": "Flashfish", "Foxface": "Leaffish",
        "Goldfish": "Leaffish", "Goldshark": "Tigerfish", "Leaffish": "Stickfish", "Pufferfish": "Comet",
        "Pygmy": "Pufferfish", "Rainbow": "Rainbow", "Shark": "Snooper", "Snooper": "Angelfish", "Snout": "Goldshark",
        "Spotanus": "Carp", "Stickfish": "Comet", "Tigerfish": "Flashfish"
    },
    "Shark": {
        "Angelfish": "Snout", "Arrowfish": "Catfish", "Beta": "Tigerfish", "Carp": "Angelfish", "Catfish": "Shark",
        "Comet": "Snooper", "Fatfish": "Arrowfish", "Flashfish": "Fatfish", "Foxface": "Flashfish",
        "Goldfish": "Flashfish", "Goldshark": "Snout", "Leaffish": "Angelfish", "Pufferfish": "Goldfish",
        "Pygmy": "Tigerfish", "Rainbow": "Snooper", "Shark": "Shark", "Snooper": "Arrowfish", "Snout": "Catfish",
        "Spotanus": "Rainbow", "Stickfish": "Goldshark", "Tigerfish": "Fatfish"
    },
    "Snooper": {
        "Angelfish": "Goldshark", "Arrowfish": "Snout", "Beta": "Rainbow", "Carp": "Rainbow", "Catfish": "Snout",
        "Comet": "Tigerfish", "Fatfish": "Fatfish", "Flashfish": "Angelfish", "Foxface": "Stickfish",
        "Goldfish": "Comet", "Goldshark": "Snooper", "Leaffish": "Flashfish", "Pufferfish": "Flashfish",
        "Pygmy": "Comet", "Rainbow": "Angelfish", "Shark": "Arrowfish", "Snooper": "Snooper", "Snout": "Fatfish",
        "Spotanus": "Stickfish", "Stickfish": "Tigerfish", "Tigerfish": "Goldshark"
    },
    "Snout": {
        "Angelfish": "Snooper", "Arrowfish": "Arrowfish", "Beta": "Flashfish", "Carp": "Flashfish", "Catfish": "Arrowfish",
        "Comet": "Angelfish", "Fatfish": "Snout", "Flashfish": "Goldshark", "Foxface": "Comet",
        "Goldfish": "Rainbow", "Goldshark": "Fatfish", "Leaffish": "Tigerfish", "Pufferfish": "Tigerfish",
        "Pygmy": "Rainbow", "Rainbow": "Goldshark", "Shark": "Catfish", "Snooper": "Snout", "Snout": "Snout",
        "Spotanus": "Comet", "Stickfish": "Angelfish", "Tigerfish": "Snooper"
    },
    "Spotanus": {
        "Angelfish": "Pufferfish", "Arrowfish": "Comet", "Beta": "Goldfish", "Carp": "Pygmy", "Catfish": "Rainbow",
        "Comet": "Carp", "Fatfish": "Stickfish", "Flashfish": "Leaffish", "Foxface": "Foxface",
        "Goldfish": "Foxface", "Goldshark": "Pufferfish", "Leaffish": "Pygmy", "Pufferfish": "Beta",
        "Pygmy": "Goldfish", "Rainbow": "Carp", "Shark": "Rainbow", "Snooper": "Stickfish", "Snout": "Comet",
        "Spotanus": "Spotanus", "Stickfish": "Beta", "Tigerfish": "Leaffish"
    },
    "Stickfish": {
        "Angelfish": "Flashfish", "Arrowfish": "Angelfish", "Beta": "Leaffish", "Carp": "Pufferfish", "Catfish": "Goldshark",
        "Comet": "Comet", "Fatfish": "Tigerfish", "Flashfish": "Rainbow", "Foxface": "Carp",
        "Goldfish": "Carp", "Goldshark": "Flashfish", "Leaffish": "Pufferfish", "Pufferfish": "Stickfish",
        "Pygmy": "Leaffish", "Rainbow": "Comet", "Shark": "Goldshark", "Snooper": "Tigerfish", "Snout": "Angelfish",
        "Spotanus": "Beta", "Stickfish": "Stickfish", "Tigerfish": "Rainbow"
    },
    "Tigerfish": {
        "Angelfish": "Angelfish", "Arrowfish": "Snooper", "Beta": "Stickfish", "Carp": "Comet", "Catfish": "Fatfish",
        "Comet": "Flashfish", "Fatfish": "Goldshark", "Flashfish": "Tigerfish", "Foxface": "Pufferfish",
        "Goldfish": "Pufferfish", "Goldshark": "Angelfish", "Leaffish": "Comet", "Pufferfish": "Rainbow",
        "Pygmy": "Stickfish", "Rainbow": "Flashfish", "Shark": "Fatfish", "Snooper": "Goldshark", "Snout": "Snooper",
        "Spotanus": "Leaffish", "Stickfish": "Rainbow", "Tigerfish": "Tigerfish"
    }
}

class Fish {
    constructor(fin, species) {
        this.fin = fin;
        this.species = species;
    }

    toString() {
        return `${this.fin} ${this.species}`;
    }

    equals(other) {
        return this.species === other.species && this.fin === other.fin;
    }

    hashCode() {
        return this.species.hashCode() ^ this.fin.hashCode();
    }

    findParents(speciesDict, finDict) {
        const speciesList = [];
        for (const s1 in speciesDict) {
            for (const s2 in speciesDict) {
                if (speciesDict[s1][s2] === this.species) {
                    speciesList.push([s1, s2]);
                }
            }
        }

        const finList = [];
        for (const s1 in finDict) {
            for (const s2 in finDict) {
                if (finDict[s1][s2] === this.fin) {
                    finList.push([s1, s2]);
                }
            }
        }

        const resultList = [];
        for (const speciesComb of speciesList) {
            for (const finComb of finList) {
                const fish1 = new Fish(finComb[0], speciesComb[0]);
                const fish2 = new Fish(finComb[1], speciesComb[1]);

                if (this.equals(fish1) || this.equals(fish2)) {
                    continue;
                }

                resultList.push(new Pair(fish1, fish2));
            }
        }

        return resultList;
    }
}

class Pair {
    constructor(fish1, fish2) {
        this.fish1 = fish1;
        this.fish2 = fish2;
    }
}

// Adding hashCode function to String prototype (simple implementation)
String.prototype.hashCode = function() {
    let hash = 0;
    for (let i = 0; i < this.length; i++) {
        const char = this.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
};

function bfsBreedingSolver(targetFish, availableFish, speciesDict, finDict) {
    // Queue for BFS: each element is a tuple [currentFish, path]
    let queue = [[targetFish, []]];

    // Set to track visited nodes
    let visited = new Set();
    console.log(availableFish);

    while (queue.length > 0) {
        // Dequeue the first element
        let [currentFish, path] = queue.shift();

        // Get potential parent pairs to breed the current fish
        let possibleParents = currentFish.findParents(speciesDict, finDict);

        for (let pair of possibleParents) {
            if (availableFish.some(f => f.equals(pair.fish1)) && availableFish.some(f => f.equals(pair.fish2))) {
                // return [pair, ...path];
                return [pair].concat(path);
            }

            if (!visited.has(pair.fish1) && !visited.has(pair.fish2)) {
                let newPath = [pair].concat(path);
                if (availableFish.some(f => f.equals(pair.fish1))) {
                    queue.push([pair.fish2, newPath]);
                    visited.add(pair.fish2);
                }
                if (availableFish.some(f => f.equals(pair.fish2))) {
                    queue.push([pair.fish1, newPath]);
                    visited.add(pair.fish1);
                }
            }
        }
    }

    return null;
}

function showResult(output) {
    const resultHeader = document.getElementById('result-header');
    resultHeader.style.display = 'block';
    resultHeader.innerHTML = 'Result';

    const resultBody = document.getElementById('result-body');
    resultBody.style.display = 'block';
    resultBody.innerHTML = '';
    output.forEach(text => {
        // Create a new div element
        const newDiv = document.createElement('div');
        newDiv.textContent = text;

        // Append the div to the container
        resultBody.appendChild(newDiv);
    });
    // resultBody.innerHTML = output;
}

function getFishInput() {
    const finWanted = document.getElementById('fin-wanted').value;
    const speciesWanted = document.getElementById('species-wanted').value;

    const species = [];
    const fins = [];
    let i = 1;

    while (true) {
        // Construct the dynamic IDs for species and fin
        const finId = `fin${i}`;
        const speciesId = `species${i}`;
        
        // Try to get the elements by their IDs
        const finElement = document.getElementById(finId);
        const speciesElement = document.getElementById(speciesId);

        // If either element doesn't exist, exit the loop
        if (!speciesElement || !finElement) {
            break;
        }

        // Push the values to the arrays
        fins.push(finElement.value);
        species.push(speciesElement.value);

        // Move to the next fish
        i++;
    }

    console.log("Fins:", fins);
    console.log("Species:", species);

    const fishArray = species.map((s, index) => new Fish(fins[index], s));
    console.log("Fish Objects:", fishArray);

    const targetFish = new Fish(finWanted, speciesWanted)

    const breedingPath = bfsBreedingSolver(targetFish, fishArray, speciesDict, finDict);

    let output = [`Finding breeding path for: ${targetFish}\n`];
    if (breedingPath) {
        breedingPath.forEach((pair, index) => {
            output.push(`Step ${index + 1}: Breed ${pair.fish1} with ${pair.fish2} to create ${finDict[pair.fish1.fin][pair.fish2.fin]} ${speciesDict[pair.fish1.species][pair.fish2.species]}\n`);
        });
    } else {
        output.push("No breeding path found.");
    }
    console.log(output);
    showResult(output);
}

const finOptions = [
    "Bluetip", "Canary", "Crimson", "Daffodil", "Greenfin", "Hooked", "Imperial",
    "Orange", "Oriental", "Peachy", "Pink", "Razorback", "Royal", "Rusty", 
    "Sapphire", "Serrated", "Silky", "Snubbed", "Spined", "Striped", "Tangerine"
];
const speciesOptions = [
    "Angelfish", "Arrowfish", "Beta", "Carp", "Catfish", "Comet", "Fatfish",
    "Flashfish", "Foxface", "Goldfish", "Goldshark", "Leaffish", "Pufferfish", 
    "Pygmy", "Rainbow", "Shark", "Snooper", "Snout", "Spotanus", "Stickfish", 
    "Tigerfish"
];

document.getElementById('addInput').addEventListener('click', function() {
    const inputContainer = document.getElementById('inputContainer');

    // Create a new input group div
    const newInputGroup = document.createElement('div');
    newInputGroup.className = 'input-group';

    // Get the number of inputs already in the form
    const inputCount = inputContainer.getElementsByClassName('input-group').length + 1;

    // Create a label and select for the new fin dropdown
    const newFinLabel = document.createElement('label');
    newFinLabel.setAttribute('for', 'fin' + inputCount);
    newFinLabel.innerText = 'Fin: ';
    newFinLabel.className = 'form-label';
    const newFinSelect = document.createElement('select');
    newFinSelect.id = 'fin' + inputCount;
    newFinSelect.name = 'fin' + inputCount;
    newFinSelect.className = 'form-select';
    finOptions.forEach(function(fin) {
        const option = document.createElement('option');
        option.value = fin;
        option.text = fin;
        newFinSelect.appendChild(option);
    });

    // Create a label and select for the new species dropdown
    const newSpeciesLabel = document.createElement('label');
    newSpeciesLabel.setAttribute('for', 'species' + inputCount);
    newSpeciesLabel.innerText = ' Species: ';
    newSpeciesLabel.className = 'form-label';
    const newSpeciesSelect = document.createElement('select');
    newSpeciesSelect.id = 'species' + inputCount;
    newSpeciesSelect.name = 'species' + inputCount;
    newSpeciesSelect.className = 'form-select';
    speciesOptions.forEach(function(species) {
        const option = document.createElement('option');
        option.value = species;
        option.text = species;
        newSpeciesSelect.appendChild(option);
    });

    // Append the fin label and select to the new input group
    // Append the species label and select to the new input group
    const fishDiv = document.createElement('div');
    fishDiv.appendChild(newFinLabel);
    fishDiv.appendChild(newFinSelect);
    fishDiv.appendChild(newSpeciesLabel);
    fishDiv.appendChild(newSpeciesSelect);

    // Append both columns to the new input group
    newInputGroup.appendChild(fishDiv);

    // Append the new input group to the input container
    inputContainer.appendChild(newInputGroup);
});

document.addEventListener('DOMContentLoaded', function() {
    const inputContainer = document.getElementById('inputWantedContainer');
    const newInputGroup = document.createElement('div');
    // Create a label and select for the new fin dropdown
    const newFinLabel = document.createElement('label');
    newFinLabel.setAttribute('for', 'fin-wanted');
    newFinLabel.innerText = 'Fin: ';
    newFinLabel.className = 'form-label';
    const newFinSelect = document.createElement('select');
    newFinSelect.id = 'fin-wanted';
    newFinSelect.name = 'fin-wanted';
    newFinSelect.className = 'form-select';
    finOptions.forEach(function(fin) {
        const option = document.createElement('option');
        option.value = fin;
        option.text = fin;
        newFinSelect.appendChild(option);
    });

    // Create a label and select for the new species dropdown
    const newSpeciesLabel = document.createElement('label');
    newSpeciesLabel.setAttribute('for', 'species-wanted');
    newSpeciesLabel.innerText = ' Species: ';
    newSpeciesLabel.className = 'form-label';
    const newSpeciesSelect = document.createElement('select');
    newSpeciesSelect.id = 'species-wanted';
    newSpeciesSelect.name = 'species-wanted';
    newSpeciesSelect.className = 'form-select';
    speciesOptions.forEach(function(species) {
        const option = document.createElement('option');
        option.value = species;
        option.text = species;
        newSpeciesSelect.appendChild(option);
    });

    // Append the fin label and select to the new input group
    // Append the species label and select to the new input group
    const fishDiv = document.createElement('div');
    fishDiv.appendChild(newFinLabel);
    fishDiv.appendChild(newFinSelect);
    fishDiv.appendChild(newSpeciesLabel);
    fishDiv.appendChild(newSpeciesSelect);

    // Append both columns to the new input group
    newInputGroup.appendChild(fishDiv);

    // Append the new input group to the input container
    inputContainer.appendChild(newInputGroup);
}, false);
