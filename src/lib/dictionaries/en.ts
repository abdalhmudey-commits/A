const dictionary = {
    mainTabs: {
      home: "Home",
      habits: "Habits",
      remembrances: "Remembrances",
      settings: "Settings",
      notes: "Notes",
    },
    settings: {
      title: "Settings",
      language: "Language",
      selectLanguage: "Select Language",
      theme: "Theme",
      selectTheme: "Select a Theme",
      light: "Light",
      dark: "Dark",
      notifications: "Enable Notifications",
    },
    remembrances: {
      morning: "Morning Remembrances",
      evening: "Evening Remembrances",
      virtue: "Virtue",
    },
    habits: {
      newSetup: "New Setup",
      myHabits: "My Habits",
      noHabitsTitle: "No current habits",
      noHabitsDescription: "Go to 'New Setup' to start tracking your first habit.",
      deleteHabit: "Delete Habit",
      habitDescriptionLabel: "What habit do you want to track?",
      habitDescriptionPlaceholder: "e.g. nail biting, social media scrolling...",
      reminderFrequencyLabel: "How often do you want to be reminded?",
      every: "Every",
      intervalPlaceholder: "Interval value",
      unit: "Unit",
      seconds: "Seconds",
      minutes: "Minutes",
      hours: "Hours",
      days: "Days",
      reminderMessageLabel: "Reminder message content",
      reminderMessagePlaceholder: "Write a message to yourself (e.g. Stop! You are stronger than this habit.)",
      audioReminderLabel: "Audio Reminder (optional)",
      recordAudio: "Record Audio",
      uploadAudio: "Upload Audio File",
      deleteAudio: "Delete Audio",
      saveHabit: "Add New Habit",
      recordingToastTitle: "Recording started...",
      recordingToastDescription: "Speak now.",
      micErrorToastTitle: "Microphone Access Error",
      micErrorToastDescription: "Please ensure you have allowed microphone access in your browser settings.",
      invalidFileToastTitle: "Invalid File",
      invalidFileToastDescription: "Please select an audio file.",
      missingFieldsToastTitle: "Missing Fields",
      missingFieldsToastDescription: "Please fill in the habit description and reminder message content.",
      habitAddedToastTitle: "Habit added successfully!",
      habitAddedToastDescription: "You can see your new habit in the 'My Habits' tab.",
      intervalUnit: {
        seconds: { singular: "second", plural: "seconds" },
        minutes: { singular: "minute", plural: "minutes" },
        hours: { singular: "hour", plural: "hours" },
        days: { singular: "day", plural: "days" },
      },
    },
    home: {
      previous: "Previous",
      next: "Next",
      summarizeBook: "Summarize a book for me",
      loadingSummary: "Summarizing...",
      summaryBy: "By: ",
      errorTitle: "Error",
      errorAuthor: "System",
      errorSummary: "Sorry, we couldn't summarize a book at this time. Please try again later.",
    },
    notes: {
        title: "Note Taking",
        description: "Write down your thoughts, goals, or anything that inspires you here.",
        placeholder: "Start writing...",
        saved: "Saved."
    },
    remembrancesData: {
      morningRemembrances: [
        {
            id: 1,
            arabicText: 'أَعُوذُ بِاللهِ مِنْ الشَّيْطَانِ الرَّجِيمِ\nاللّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ. [آية الكرسى - البقرة 255]',
            translation: 'I seek refuge in Allah from Satan, the accursed.\nAllah! There is no god but He - the Living, the Self-subsisting, Eternal. No slumber can seize Him nor sleep. His are all things in the heavens and on earth. Who is there that can intercede in His presence except as He permitteth? He knoweth what (appeareth to His creatures as) before or after or behind them. Nor shall they compass aught of His knowledge except as He willeth. His Throne doth extend over the heavens and the earth, and He feeleth no fatigue in guarding and preserving them for He is the Most High, the Supreme (in glory). [Ayat-ul-Kursi, Al-Baqarah 255]',
            count: 1,
            virtue: 'Whoever says it in the morning is protected from the jinn until the evening, and whoever says it in the evening is protected from them until the morning.'
        },
        {
            id: 2,
            arabicText: 'قُلْ هُوَ اللَّهُ أَحَدٌ.. * قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ.. * قُلْ أَعُوذُ بِرَبِّ النَّاسِ..',
            translation: 'Say: He is Allah, the One... * Say: I seek refuge in the Lord of the daybreak... * Say: I seek refuge in the Lord of mankind...',
            count: 3,
            virtue: 'Whoever says them three times in the morning and evening, they will suffice him against everything.'
        },
        {
            id: 3,
            arabicText: 'أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذَا الْيَوْمِ وَخَيْرَ مَا بَعْدَهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذَا الْيَوْمِ وَشَرِّ مَا بَعْدَهُ، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ.',
            translation: 'We have reached the morning and at this very time all sovereignty belongs to Allah, and all praise is for Allah. There is no god but Allah, alone, without partner. To Him belongs all sovereignty and praise and He is over all things omnipotent. My Lord, I ask You for the good of this day and the good of what follows it, and I seek refuge in You from the evil of this day and the evil of what follows it. My Lord, I seek refuge in You from laziness and the evil of old age. My Lord, I seek refuge in You from torment in the Fire and torment in the grave.',
            count: 1,
            virtue: ''
        },
        {
            id: 4,
            arabicText: 'اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ وَإِلَيْكَ النُّشُورُ.',
            translation: 'O Allah, by You we have reached the morning and by You we have reached the evening, by You we live and by You we die, and to You is the resurrection.',
            count: 1,
            virtue: ''
        },
        {
            id: 5,
            arabicText: 'اللَّهُمَّ أَنْتَ رَبِّي لاَ إِلَهَ إِلاَّ أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لاَ يَغْفِرُ الذُّنُوبَ إِلاَّ أَنْتَ.',
            translation: 'O Allah, You are my Lord, there is no god but You. You created me and I am Your slave, and I am upon Your covenant and promise as much as I am able. I seek refuge in You from the evil of what I have done. I acknowledge Your favor upon me, and I acknowledge my sin, so forgive me, for verily none forgives sins but You.',
            count: 1,
            virtue: 'Whoever says it with certainty in the morning and dies on that day will enter Paradise, and whoever says it with certainty in the evening and dies on that night will enter Paradise.'
        },
        {
            id: 6,
            arabicText: 'اللَّهُمَّ إِنِّي أَصْبَحْتُ أُشْهِدُكَ، وَأُشْهِدُ حَمَلَةَ عَرْشِكَ، وَمَلاَئِكَتَكَ، وَجَمِيعَ خَلْقِكَ، أَنَّكَ أَنْتَ اللَّهُ لاَ إِلَهَ إِلاَّ أَنْتَ وَحْدَكَ لاَ شَرِيكَ لَكَ، وَأَنَّ مُحَمَّداً عَبْدُكَ وَرَسُولُكَ.',
            translation: 'O Allah, I have reached the morning and I call You, the bearers of Your Throne, Your angels, and all of Your creation to witness that You are Allah, there is no god but You, alone, without partner, and that Muhammad is Your slave and Your Messenger.',
            count: 4,
            virtue: 'Whoever says it four times in the morning or evening, Allah will emancipate him from the Fire.'
        },
        {
            id: 7,
            arabicText: 'اللَّهُمَّ مَا أَصْبَحَ بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ فَمِنْكَ وَحْدَكَ لاَ شَرِيكَ لَكَ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ.',
            translation: 'O Allah, whatever blessing has come to me or to any of Your creation this morning is from You alone, without partner. So for You is all praise and for You is all thanks.',
            count: 1,
            virtue: 'Whoever says it in the morning has fulfilled the thankfulness of his day, and whoever says it in the evening has fulfilled the thankfulness of his night.'
        },
        {
            id: 8,
            arabicText: 'اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لاَ إِلَهَ إِلاَّ أَنْتَ. اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ، وَالْفَقْرِ، وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، لاَ إِلَهَ إِلاَّ أَنْتَ.',
            translation: 'O Allah, grant me health in my body. O Allah, grant me health in my hearing. O Allah, grant me health in my sight. There is no god but You. O Allah, I seek refuge in You from disbelief and poverty, and I seek refuge in You from the torment of the grave. There is no god but You.',
            count: 3,
            virtue: ''
        },
        {
            id: 9,
            arabicText: 'حَسْبِيَ اللَّهُ لاَ إِلَهَ إِلاَّ هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ.',
            translation: 'Allah is sufficient for me. There is no god but Him. In Him I have placed my trust, and He is the Lord of the great Throne.',
            count: 7,
            virtue: 'Whoever says it seven times in the morning and evening, Allah will suffice him in his concerns of this world and the Hereafter.'
        },
        {
            id: 10,
            arabicText: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالآخِرَةِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ: فِي دِينِي وَدُنْيَايَ وَأَهْلِي، وَمَالِي، اللَّهُمَّ اسْتُرْ عَوْرَاتِي، وَآمِنْ رَوْعَاتِي، اللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ، وَمِنْ خَلْفِي، وَعَنْ يَمِينِي، وَعَنْ شِمَالِي، وَمِنْ فَوْقِي، وَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي.',
            translation: 'O Allah, I ask You for pardon and well-being in this life and the next. O Allah, I ask You for pardon and well-being in my religion, my worldly affairs, my family, and my wealth. O Allah, conceal my faults and calm my fears. O Allah, protect me from before me and from behind me, from my right and from my left, and from above me, and I seek refuge in Your greatness from being assassinated from beneath me.',
            count: 1,
            virtue: ''
        },
        {
            id: 11,
            arabicText: 'اللَّهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ فَاطِرَ السَّمَاوَاتِ وَالأَرْضِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيكَهُ، أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ أَنْتَ، أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي، وَمِنْ شَرِّ الشَّيْطَانِ وَشِرْكِهِ، وَأَنْ أَقْتَرِفَ عَلَى نَفْسِي سُوءاً، أَوْ أَجُرَّهُ إِلَى مُسْلِمٍ.',
            translation: 'O Allah, Knower of the unseen and the seen, Creator of the heavens and the earth, Lord and Sovereign of all things, I bear witness that there is no god but You. I seek refuge in You from the evil of my own self, and from the evil of Satan and his polytheism, and from committing evil against myself or bringing it upon a Muslim.',
            count: 1,
            virtue: ''
        },
        {
            id: 12,
            arabicText: 'بِسْمِ اللَّهِ الَّذِي لاَ يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الأَرْضِ وَلاَ فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ.',
            translation: 'In the name of Allah, with whose name nothing on earth or in the heavens can cause harm, and He is the All-Hearing, the All-Knowing.',
            count: 3,
            virtue: 'Whoever says it three times in the morning and three times in the evening, nothing will harm him.'
        },
        {
            id: 13,
            arabicText: 'رَضِيتُ بِاللَّهِ رَبَّاً، وَبِالإِسْلاَمِ دِيناً، وَبِمُحَمَّدٍ صلى الله عليه وسلم نَبِيّاً.',
            translation: 'I am pleased with Allah as my Lord, with Islam as my religion, and with Muhammad (peace be upon him) as my Prophet.',
            count: 3,
            virtue: 'Whoever says it three times in the morning and three times in the evening, it is a right upon Allah to please him on the Day of Resurrection.'
        },
        {
            id: 14,
            arabicText: 'يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ أَصْلِحْ لِي شَأْنِي كُلَّهُ وَلاَ تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ.',
            translation: 'O Ever-Living, O Self-Subsisting, by Your mercy I seek assistance. Rectify for me all of my affairs and do not leave me to myself for the blink of an eye.',
            count: 3,
            virtue: ''
        },
        {
            id: 15,
            arabicText: 'أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ رَبِّ الْعَالَمِينَ، اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذَا الْيَوْمِ: فَتْحَهُ، وَنَصْرَهُ، وَنُورَهُ، وَبَرَكَتَهُ، وَهُدَاهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِيهِ وَشَرِّ مَا بَعْدَهُ.',
            translation: 'We have reached the morning, and the dominion belongs to Allah, Lord of the worlds. O Allah, I ask You for the good of this day: its victory, its help, its light, its blessings, and its guidance. I seek refuge in You from the evil that is in it and from the evil that follows it.',
            count: 1,
            virtue: ''
        },
        {
            id: 16,
            arabicText: 'أَصْبَحْنا عَلَى فِطْرَةِ الإسْلاَمِ، وَعَلَى كَلِمَةِ الإِخْلاَصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ صلى الله عليه وسلم، وَعَلَى مِلَّةِ أَبِينَا إبْرَاهِيمَ، حَنِيفاً مُسْلِماً وَمَا كَانَ مِنَ الْمُشْرِكِينَ.',
            translation: 'We have reached the morning upon the natural disposition of Islam, and upon the word of sincerity, and upon the religion of our Prophet Muhammad (peace be upon him), and upon the creed of our father Ibrahim, upright and Muslim, and he was not of the polytheists.',
            count: 1,
            virtue: ''
        },
        {
            id: 17,
            arabicText: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ.',
            translation: 'Glory is to Allah and praise is to Him.',
            count: 100,
            virtue: 'Whoever says it one hundred times in the morning and evening, no one will come on the Day of Resurrection with anything better than what he has come with, except for someone who has said the same or more.'
        },
        {
            id: 18,
            arabicText: 'لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.',
            translation: 'There is no god but Allah, alone, without partner. To Him belongs all sovereignty and praise, and He is over all things omnipotent.',
            count: 10,
            virtue: 'Whoever says it ten times, it will be for him the equivalent of freeing ten slaves, and one hundred good deeds will be written for him, and one hundred bad deeds will be erased from him, and it will be a protection for him from Satan on that day until the evening, and no one will come with anything better than what he has come with, except for someone who has done more than that.'
        },
        {
            id: 19,
            arabicText: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ: عَدَدَ خَلْقِهِ، وَرِضَا نَفْسِهِ، وَزِنَةَ عَرْشِهِ، وَمِدَادَ كَلِمَاتِهِ.',
            translation: 'Glory is to Allah and praise is to Him, by the multitude of His creation, by His Pleasure, by the weight of His Throne, and by the extent of His Words.',
            count: 3,
            virtue: ''
        },
        {
            id: 20,
            arabicText: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْماً نَافِعاً، وَرِزْقاً طَيِّباً، وَعَمَلاً مُتَقَبَّلاً.',
            translation: 'O Allah, I ask You for beneficial knowledge, goodly provision, and acceptable deeds.',
            count: 1,
            virtue: ''
        },
        {
            id: 21,
            arabicText: 'أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ.',
            translation: 'I seek the forgiveness of Allah and repent to Him.',
            count: 100,
            virtue: ''
        },
        {
            id: 22,
            arabicText: 'اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبَيِّنَا مُحَمَّدٍ.',
            translation: 'O Allah, send blessings and peace upon our Prophet Muhammad.',
            count: 10,
            virtue: 'Whoever sends blessings upon me ten times in the morning and ten times in the evening will have my intercession on the Day of Resurrection.'
        }
      ],
      eveningRemembrances: [
        {
            id: 1,
            arabicText: 'أَعُوذُ بِاللهِ مِنْ الشَّيْطَانِ الرَّجِيمِ\nاللّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ. [آية الكرسى - البقرة 255]',
            translation: 'I seek refuge in Allah from Satan, the accursed.\nAllah! There is no god but He - the Living, the Self-subsisting, Eternal. No slumber can seize Him nor sleep. His are all things in the heavens and on earth. Who is there that can intercede in His presence except as He permitteth? He knoweth what (appeareth to His creatures as) before or after or behind them. Nor shall they compass aught of His knowledge except as He willeth. His Throne doth extend over the heavens and the earth, and He feeleth no fatigue in guarding and preserving them for He is the Most High, the Supreme (in glory). [Ayat-ul-Kursi, Al-Baqarah 255]',
            count: 1,
            virtue: 'Whoever says it in the evening is protected from the jinn until the morning, and whoever says it in the morning is protected from them until the evening.'
        },
        {
            id: 2,
            arabicText: 'قُلْ هُوَ اللَّهُ أَحَدٌ.. * قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ.. * قُلْ أَعُوذُ بِرَبِّ النَّاسِ..',
            translation: 'Say: He is Allah, the One... * Say: I seek refuge in the Lord of the daybreak... * Say: I seek refuge in the Lord of mankind...',
            count: 3,
            virtue: 'Whoever says them three times in the morning and evening, they will suffice him against everything.'
        },
        {
            id: 3,
            arabicText: 'أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذِهِ اللَّيْلَةِ وَخَيْرَ مَا بَعْدَهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذِهِ اللَّيْلَةِ وَشَرِّ مَا بَعْدَهَا، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ.',
            translation: 'We have reached the evening and at this very time all sovereignty belongs to Allah, and all praise is for Allah. There is no god but Allah, alone, without partner. To Him belongs all sovereignty and praise and He is over all things omnipotent. My Lord, I ask You for the good of this night and the good of what follows it, and I seek refuge in You from the evil of this night and the evil of what follows it. My Lord, I seek refuge in You from laziness and the evil of old age. My Lord, I seek refuge in You from torment in the Fire and torment in the grave.',
            count: 1,
            virtue: ''
        },
        {
            id: 4,
            arabicText: 'اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ وَإِلَيْكَ الْمَصِيرُ.',
            translation: 'O Allah, by You we have reached the evening and by You we have reached the morning, by You we live and by You we die, and to You is the final return.',
            count: 1,
            virtue: ''
        },
        {
            id: 5,
            arabicText: 'اللَّهُمَّ أَنْتَ رَبِّي لاَ إِلَهَ إِلاَّ أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لاَ يَغْفِرُ الذُّنُوبَ إِلاَّ أَنْتَ.',
            translation: 'O Allah, You are my Lord, there is no god but You. You created me and I am Your slave, and I am upon Your covenant and promise as much as I am able. I seek refuge in You from the evil of what I have done. I acknowledge Your favor upon me, and I acknowledge my sin, so forgive me, for verily none forgives sins but You.',
            count: 1,
            virtue: 'Whoever says it with certainty in the evening and dies on that night will enter Paradise, and whoever says it with certainty in the morning and dies on that day will enter Paradise.'
        },
        {
            id: 6,
            arabicText: 'اللَّهُمَّ إِنِّي أَمْسَيْتُ أُشْهِدُكَ، وَأُشْهِدُ حَمَلَةَ عَرْشِكَ، وَمَلاَئِكَتَكَ، وَجَمِيعَ خَلْقِكَ، أَنَّكَ أَنْتَ اللَّهُ لاَ إِلَهَ إِلاَّ أَنْتَ وَحْدَكَ لاَ شَرِيكَ لَكَ، وَأَنَّ مُحَمَّداً عَبْدُكَ وَرَسُولُكَ.',
            translation: 'O Allah, I have reached the evening and I call You, the bearers of Your Throne, Your angels, and all of Your creation to witness that You are Allah, there is no god but You, alone, without partner, and that Muhammad is Your slave and Your Messenger.',
            count: 4,
            virtue: 'Whoever says it four times in the evening or morning, Allah will emancipate him from the Fire.'
        },
        {
            id: 7,
            arabicText: 'اللَّهُمَّ مَا أَمْسَى بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ فَمِنْكَ وَحْدَكَ لاَ شَرِيكَ لَكَ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ.',
            translation: 'O Allah, whatever blessing has come to me or to any of Your creation this evening is from You alone, without partner. So for You is all praise and for You is all thanks.',
            count: 1,
            virtue: 'Whoever says it in the evening has fulfilled the thankfulness of his night, and whoever says it in the morning has fulfilled the thankfulness of his day.'
        },
        {
            id: 8,
            arabicText: 'اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لاَ إِلَهَ إِلاَّ أَنْتَ. اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ، وَالْفَقْرِ، وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، لاَ إِلَهَ إِلاَّ أَنْتَ.',
            translation: 'O Allah, grant me health in my body. O Allah, grant me health in my hearing. O Allah, grant me health in my sight. There is no god but You. O Allah, I seek refuge in You from disbelief and poverty, and I seek refuge in You from the torment of the grave. There is no god but You.',
            count: 3,
            virtue: ''
        },
        {
            id: 9,
            arabicText: 'حَسْبِيَ اللَّهُ لاَ إِلَهَ إِلاَّ هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ.',
            translation: 'Allah is sufficient for me. There is no god but Him. In Him I have placed my trust, and He is the Lord of the great Throne.',
            count: 7,
            virtue: 'Whoever says it seven times in the evening and morning, Allah will suffice him in his concerns of this world and the Hereafter.'
        },
        {
            id: 10,
            arabicText: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالآخِرَةِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ: فِي دِينِي وَدُنْيَايَ وَأَهْلِي، وَمَالِي، اللَّهُمَّ اسْتُرْ عَوْرَاتِي، وَآمِنْ رَوْعَاتِي، اللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ، وَمِنْ خَلْفِي، وَعَنْ يَمِينِي، وَعَنْ شِمَالِي، وَمِنْ فَوْقِي، وَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي.',
            translation: 'O Allah, I ask You for pardon and well-being in this life and the next. O Allah, I ask You for pardon and well-being in my religion, my worldly affairs, my family, and my wealth. O Allah, conceal my faults and calm my fears. O Allah, protect me from before me and from behind me, from my right and from my left, and from above me, and I seek refuge in Your greatness from being assassinated from beneath me.',
            count: 1,
            virtue: ''
        },
        {
            id: 11,
            arabicText: 'اللَّهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ فَاطِرَ السَّمَاوَاتِ وَالأَرْضِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيكَهُ، أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ أَنْتَ، أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي، وَمِنْ شَرِّ الشَّيْطَانِ وَشِرْكِهِ، وَأَنْ أَقْتَرِفَ عَلَى نَفْسِي سُوءاً، أَوْ أَجُرَّهُ إِلَى مُسْلِمٍ.',
            translation: 'O Allah, Knower of the unseen and the seen, Creator of the heavens and the earth, Lord and Sovereign of all things, I bear witness that there is no god but You. I seek refuge in You from the evil of my own self, and from the evil of Satan and his polytheism, and from committing evil against myself or bringing it upon a Muslim.',
            count: 1,
            virtue: ''
        },
        {
            id: 12,
            arabicText: 'بِسْمِ اللَّهِ الَّذِي لاَ يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الأَرْضِ وَلاَ فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ.',
            translation: 'In the name of Allah, with whose name nothing on earth or in the heavens can cause harm, and He is the All-Hearing, the All-Knowing.',
            count: 3,
            virtue: 'Whoever says it three times in the evening and three times in the morning, nothing will harm him.'
        },
        {
            id: 13,
            arabicText: 'رَضِيتُ بِاللَّهِ رَبَّاً، وَبِالإِسْلاَمِ دِيناً، وَبِمُحَمَّدٍ صلى الله عليه وسلم نَبِيّاً.',
            translation: 'I am pleased with Allah as my Lord, with Islam as my religion, and with Muhammad (peace be upon him) as my Prophet.',
            count: 3,
            virtue: 'Whoever says it three times in the evening and three times in the morning, it is a right upon Allah to please him on the Day of Resurrection.'
        },
        {
            id: 14,
            arabicText: 'يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ أَصْلِحْ لِي شَأْنِي كُلَّهُ وَلاَ تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ.',
            translation: 'O Ever-Living, O Self-Subsisting, by Your mercy I seek assistance. Rectify for me all of my affairs and do not leave me to myself for the blink of an eye.',
            count: 1,
            virtue: ''
        },
        {
            id: 15,
            arabicText: 'أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ رَبِّ الْعَالَمِينَ، اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذِهِ اللَّيْلَةِ: فَتْحَهَا، وَنَصْرَهَا، وَنُورَهَا، وَبَرَكَتَهَا، وَهُدَاهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِيهَا وَشَرِّ مَا بَعْدَهَا.',
            translation: 'We have reached the evening, and the dominion belongs to Allah, Lord of the worlds. O Allah, I ask You for the good of this night: its victory, its help, its light, its blessings, and its guidance. I seek refuge in You from the evil that is in it and from the evil that follows it.',
            count: 1,
            virtue: ''
        },
        {
            id: 16,
            arabicText: 'أَمْسَيْنا عَلَى فِطْرَةِ الإسْلاَمِ، وَعَلَى كَلِمَةِ الإِخْلاَصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ صلى الله عليه وسلم، وَعَلَى مِلَّةِ أَبِينَا إبْرَاهِيمَ، حَنِيفاً مُسْلِماً وَمَا كَانَ مِنَ الْمُشْرِكِينَ.',
            translation: 'We have reached the evening upon the natural disposition of Islam, and upon the word of sincerity, and upon the religion of our Prophet Muhammad (peace be upon him), and upon the creed of our father Ibrahim, upright and Muslim, and he was not of the polytheists.',
            count: 1,
            virtue: ''
        },
        {
            id: 17,
            arabicText: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ.',
            translation: 'Glory is to Allah and praise is to Him.',
            count: 100,
            virtue: 'Whoever says it one hundred times in the evening and morning, no one will come on the Day of Resurrection with anything better than what he has come with, except for someone who has said the same or more.'
        },
        {
            id: 18,
            arabicText: 'لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.',
            translation: 'There is no god but Allah, alone, without partner. To Him belongs all sovereignty and praise, and He is over all things omnipotent.',
            count: 10,
            virtue: 'Whoever says it ten times, it will be for him the equivalent of freeing ten slaves, and one hundred good deeds will be written for him, and one hundred bad deeds will be erased from him, and it will be a protection for him from Satan on that night until the morning, and no one will come with anything better than what he has come with, except for someone who has done more than that.'
        },
        {
            id: 19,
            arabicText: 'أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ.',
            translation: 'I seek the forgiveness of Allah and repent to Him.',
            count: 100,
            virtue: ''
        },
        {
            id: 20,
            arabicText: 'أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ.',
            translation: 'I seek refuge in the perfect words of Allah from the evil of that which He has created.',
            count: 3,
            virtue: 'Whoever says it three times in the evening will not be harmed by the sting of a snake on that night.'
        },
        {
            id: 21,
            arabicText: 'اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبَيِّنَا مُحَمَّدٍ.',
            translation: 'O Allah, send blessings and peace upon our Prophet Muhammad.',
            count: 10,
            virtue: 'Whoever sends blessings upon me ten times in the evening and ten times in the morning will have my intercession on the Day of Resurrection.'
        }
      ]
    }
  };
export default dictionary;
