Ext.define('CMS.store.Users', {
    extend: 'Ext.data.Store',

    model: 'CMS.model.User',

    pageSize: 10,

    proxy: {
        type: 'memory',
        url: 'data/users.json',
        reader: {
            type: 'json',
            root: 'users',
            totalProperty : 'total'
        }
    },

    data: {
        "total": 40,
        "users": [
            {
                "key": "AB27A03B4F58F2311819E7DEF338CA9F83E3992A",
                "name": "adrianef",
                "qualifiedName": "enonic\\adrianef",
                "displayName": "Adrian Enok Friis",
                "userStore": "enonic",
                "lastModified": "2009-10-06 06:14:23"
            },
            {
                "key": "E6C593DE14515428B06F1A16E0D28E2341FC5AB4",
                "name": "adriaanb",
                "qualifiedName": "enonic\\adriaanb",
                "displayName": "Adriaan Bloem",
                "userStore": "enonic",
                "lastModified": "2009-12-08 10:58:43"
            },
            {
                "key": "27D7BB29289A71D2480707F9CAA64D09E045D76C",
                "name": "akselnh",
                "qualifiedName": "enonic\\akselnh",
                "displayName": "Aksel Nilsen Huser",
                "userStore": "enonic",
                "lastModified": "2009-10-21 12:45:41"
            },
            {
                "key": "2BF83E35709BC83C6A80874D660788C65A32C93F",
                "name": "alexandg",
                "qualifiedName": "enonic\\alexandg",
                "displayName": "Alexander Gray",
                "userStore": "enonic",
                "lastModified": "2009-10-06 06:14:23"
            },
            {
                "key": "069BA516B47ECA34848FECEA4645B5091B0170EB",
                "name": "alexandj",
                "qualifiedName": "enonic\\alexandj",
                "displayName": "Alexander Johannesen",
                "userStore": "enonic",
                "lastModified": "2009-09-19 09:03:43"
            },
            {
                "key": "8737A2B8118EC1BB6CB402549BD2245900F1ABCD",
                "name": "alexands",
                "qualifiedName": "enonic\\alexands",
                "displayName": "Alexander Sundli-HÃ¤rdig",
                "userStore": "enonic",
                "lastModified": "2009-09-19 09:03:43"
            },
            {
                "key": "C6E2E0B008F192726EC05B8E9F928B5F51AD79ED",
                "name": "aro",
                "qualifiedName": "enonic\\aro",
                "displayName": "Alex Rodriguez",
                "userStore": "enonic",
                "lastModified": "2010-11-01 01:57:34"
            },
            {
                "key": "7E614C4C09AC5EB9F86E1EAD6FC09F3A9B5B4082",
                "name": "alfb",
                "qualifiedName": "enonic\\alfb",
                "displayName": "Alf Blomstrand",
                "userStore": "enonic",
                "lastModified": "2009-09-19 09:03:55"
            },
            {
                "key": "38ED52610516A0781396E60CCD06C58E69476B41",
                "name": "alfivark",
                "qualifiedName": "enonic\\alfivark",
                "displayName": "Alf Ivar Kvernvik",
                "userStore": "enonic",
                "lastModified": "2009-10-06 06:14:22"
            },
            {
                "key": "75521BE0B8061FF6C57F8A1215FFF59E38A8270B",
                "name": "alfkrisb",
                "qualifiedName": "enonic\\alfkrisb",
                "displayName": "Alf Kristian BjÃ¸rdal",
                "userStore": "enonic",
                "lastModified": "2010-02-25 10:02:17"
            },
            {
                "key": "38BB11F02171B415D20060613079EFB900A6241E",
                "name": "andersb",
                "qualifiedName": "enonic\\andersb",
                "displayName": "Anders Botnen",
                "userStore": "enonic",
                "lastModified": "2009-10-21 12:46:35"
            },
            {
                "key": "691F1A293B546216D6901DBCF35CE3C2898ACE90",
                "name": "anderse",
                "qualifiedName": "enonic\\anderse",
                "displayName": "Anders Eid",
                "userStore": "enonic",
                "lastModified": "2009-10-06 06:14:22"
            },
            {
                "key": "4FD58120712E2FF716617D2F0900535985483247",
                "name": "g007718",
                "qualifiedName": "enonic\\g007718",
                "displayName": "Anders Jacob SÃ¸rhus",
                "userStore": "enonic",
                "lastModified": "2009-10-06 06:14:22"
            },
            {
                "key": "66C76B144DD0A15D5588D3F962FAD0700A4E2A2B",
                "name": "andersl",
                "qualifiedName": "enonic\\andersl",
                "displayName": "Anders Lier",
                "userStore": "enonic",
                "lastModified": "2009-10-06 06:14:22"
            },
            {
                "key": "210BF7BC9DA85B1A59D2705A5C51C97CB392F8C6",
                "name": "anderslken",
                "qualifiedName": "enonic\\anderslken",
                "displayName": "Anders LÃ¸ken",
                "userStore": "enonic",
                "lastModified": "2010-04-08 03:42:16"
            },
            {
                "key": "DC24E0EAC55B4C7B97E417864D5D505EB2BB9191",
                "name": "andersm",
                "qualifiedName": "enonic\\andersm",
                "displayName": "Anders Martinsen",
                "userStore": "enonic",
                "lastModified": "2009-09-19 09:03:49"
            },
            {
                "key": "1F618A14EBA03DADBEEAD148BB1206DB91ADBC42",
                "name": "andersn",
                "qualifiedName": "enonic\\andersn",
                "displayName": "Anders Norstad",
                "userStore": "enonic",
                "lastModified": "2009-09-19 09:03:34"
            },
            {
                "key": "0BBD3C16230863639204D4606C10A6BF5D338783",
                "name": "andersskifte",
                "qualifiedName": "enonic\\andersskifte",
                "displayName": "Anders Skifte",
                "userStore": "enonic",
                "lastModified": "2010-03-17 04:13:38"
            },
            {
                "key": "261ECA11DA54610A0D80A6950742E739848736B9",
                "name": "ask",
                "qualifiedName": "enonic\\ask",
                "displayName": "Anders Skifte",
                "userStore": "enonic",
                "lastModified": "2010-02-15 04:14:31"
            },
            {
                "key": "D3DE1582129F94287B0CCAFDAFBF79764A8D6195",
                "name": "andersv",
                "qualifiedName": "enonic\\andersv",
                "displayName": "Anders Vindvad",
                "userStore": "enonic",
                "lastModified": "2009-10-06 06:14:23"
            },
            {
                "key": "AD6BF3CF985597DF9F3C42544FD2590A19039D77",
                "name": "andersvg",
                "qualifiedName": "enonic\\andersvg",
                "displayName": "Anders VÃ¦g",
                "userStore": "enonic",
                "lastModified": "2010-08-06 09:49:58"
            },
            {
                "key": "59B342CA6D40D3E60539304A27E7F965B0BC4657",
                "name": "aab",
                "qualifiedName": "enonic\\aab",
                "displayName": "Anders Ã…berg",
                "userStore": "enonic",
                "lastModified": "2009-09-19 09:03:37"
            },
            {
                "key": "C5F01BCF036CF2BDA98FBC691C3712184B710FDF",
                "name": "andreash",
                "qualifiedName": "enonic\\andreash",
                "displayName": "Andreas Heim",
                "userStore": "enonic",
                "lastModified": "2009-09-19 09:03:50"
            },
            {
                "key": "844C20DFA99229B5C2D451D6CFE536BF384465E4",
                "name": "andreasj",
                "qualifiedName": "enonic\\andreasj",
                "displayName": "Andreas Johnsen",
                "userStore": "enonic",
                "lastModified": "2009-09-19 09:03:56"
            },
            {
                "key": "7B00EAEE330303EA081F95591AA6AEFF716C9A55",
                "name": "andreask",
                "qualifiedName": "enonic\\andreask",
                "displayName": "Andreas Kirkerud",
                "userStore": "enonic",
                "lastModified": "2009-09-19 09:03:54"
            },
            {
                "key": "8B5974D06C38DC44A677768EAA93C875600BABC0",
                "name": "andreast",
                "qualifiedName": "enonic\\andreast",
                "displayName": "Andreas  Ã˜stereng",
                "userStore": "enonic",
                "lastModified": "2009-10-06 06:14:23"
            },
            {
                "key": "8315375AB22408B72A6572DAF47E09EC3ED48164",
                "name": "andreasv",
                "qualifiedName": "enonic\\andreasv",
                "displayName": "Andreas Ã˜verland",
                "userStore": "enonic",
                "lastModified": "2009-09-19 09:03:49"
            },
            {
                "key": "40C1DD8DDF66E12FB9B237498F517DD2EEE18177",
                "name": "andreas.overland@bekk.no",
                "qualifiedName": "enonic\\andreas.overland@bekk.no",
                "displayName": "Andreas Ã˜verland",
                "userStore": "enonic",
                "lastModified": "2009-10-06 06:14:24"
            },
            {
                "key": "7072188F656C35E1D6D6C2F022A94A17C2A3F737",
                "name": "andreasa",
                "qualifiedName": "enonic\\andreasa",
                "displayName": "Andreas Aarsland",
                "userStore": "enonic",
                "lastModified": "2009-09-19 09:03:45"
            },
            {
                "key": "E2C434B160A2F1A514203AAB2C3D5375C0594F54",
                "name": "andreh",
                "qualifiedName": "enonic\\andreh",
                "displayName": "Andre Hansen",
                "userStore": "enonic",
                "lastModified": "2009-09-19 09:03:54"
            },
            {
                "key": "E1240E71EC82C586B0103355A1C582FEC005C4A9",
                "name": "andrheiv",
                "qualifiedName": "enonic\\andrheiv",
                "displayName": "AndrÃ© Heie  Vik",
                "userStore": "enonic",
                "lastModified": "2010-10-04 11:21:00"
            },
            {
                "key": "99778700D7B69F8EB297B723ED3FE06B74F1B5F1",
                "name": "andrewk",
                "qualifiedName": "enonic\\andrewk",
                "displayName": "Andrew King",
                "userStore": "enonic",
                "lastModified": "2009-09-19 09:03:48"
            },
            {
                "key": "5D0196DDAABDF35CD524200E95CAFAB302F8F15A",
                "name": "andrewreynolds",
                "qualifiedName": "enonic\\andrewreynolds",
                "displayName": "Andrew Reynolds",
                "userStore": "enonic",
                "lastModified": "2010-03-15 09:16:35"
            },
            {
                "key": "24C43FAB3978892171006B1F8DF2C39FEBB90F63",
                "name": "anetterm",
                "qualifiedName": "enonic\\anetterm",
                "displayName": "Anette Rodahl Maltun",
                "userStore": "enonic",
                "lastModified": "2009-10-06 06:14:22"
            },
            {
                "key": "91762FB662DCAA2E898F9576F966579DB7CE1A7F",
                "name": "anetteaassfllo",
                "qualifiedName": "enonic\\anetteaassfllo",
                "displayName": "Anette Aass FlÃ¸lo",
                "userStore": "enonic",
                "lastModified": "2009-11-11 04:18:05"
            },
            {
                "key": "F8269AC3C2364A40CBD79D3431BFEE66A818801E",
                "name": "anitaingierd",
                "qualifiedName": "enonic\\anitaingierd",
                "displayName": "anita ingierd",
                "userStore": "enonic",
                "lastModified": "2010-10-19 10:31:27"
            },
            {
                "key": "D4F63045920119C4BE4CDDB555FB583859B9CF6F",
                "name": "anjalyngsmark",
                "qualifiedName": "enonic\\anjalyngsmark",
                "displayName": "Anja Lyngsmark",
                "userStore": "enonic",
                "lastModified": "2010-06-15 10:40:33"
            },
            {
                "key": "14E66C651CD24FF1B0E41B7D1FA6943EFDEE8100",
                "name": "annar",
                "qualifiedName": "enonic\\annar",
                "displayName": "Anna RÃ¸ste",
                "userStore": "enonic",
                "lastModified": "2009-09-19 09:03:47"
            },
            {
                "key": "F636AC6E51FACA85ED825E29DD45B3C12158D251",
                "name": "annchrin",
                "qualifiedName": "enonic\\annchrin",
                "displayName": "Ann Christin Nes",
                "userStore": "enonic",
                "lastModified": "2009-09-19 09:03:45"
            },
            {
                "key": "1E6D1E212C95C16851686E8D526190BACCE4A72A",
                "name": "annebric",
                "qualifiedName": "enonic\\annebric",
                "displayName": "Anne Britt Claesson",
                "userStore": "enonic",
                "lastModified": "2009-09-19 09:03:41"
            }
        ]
    }
});