const dictionaries = {
  en: {
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
            arabicText: 'اللَّهُمَّ أَنْتَ رَبِّي لاَ إِلَهَ إِلاَّ أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْfِرْ لِي فَإِنَّهُ لاَ يَغْفِرُ الذُّنُوبَ إِلاَّ أَنْتَ.',
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
            arabicText: 'اللَّهُمَّ أَنْتَ رَبِّي لاَ إِلَهَ إِلاَّ أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْfِرْ لِي فَإِنَّهُ لاَ يَغْفِرُ الذُّنُوبَ إِلاَّ أَنْتَ.',
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
  },
  ar: {
    mainTabs: {
      home: "الرئيسية",
      habits: "العادات",
      remembrances: "الأذكار",
      settings: "الإعدادات",
      notes: "الملاحظات",
    },
    settings: {
      title: "الإعدادات",
      language: "اللغة",
      selectLanguage: "اختر لغة",
      theme: "المظهر",
      selectTheme: "اختر مظهراً",
      light: "فاتح",
      dark: "داكن",
      notifications: "تفعيل الإشعارات",
    },
    remembrances: {
      morning: "أذكار الصباح",
      evening: "أذكار المساء",
      virtue: "الفضل",
    },
    habits: {
      newSetup: "إعداد جديد",
      myHabits: "عاداتي",
      noHabitsTitle: "لا توجد عادات حالية",
      noHabitsDescription: "اذهب إلى 'إعداد جديد' لبدء تتبع عادتك الأولى.",
      deleteHabit: "حذف العادة",
      habitDescriptionLabel: "ما هي العادة التي تريد تتبعها؟",
      habitDescriptionPlaceholder: "مثال: قضم الأظافر، تصفح وسائل التواصل الاجتماعي...",
      reminderFrequencyLabel: "ما هو معدل تكرار التذكير؟",
      every: "كل",
      intervalPlaceholder: "قيمة الفاصل الزمني",
      unit: "وحدة",
      seconds: "ثواني",
      minutes: "دقائق",
      hours: "ساعات",
      days: "أيام",
      reminderMessageLabel: "محتوى رسالة التذكير",
      reminderMessagePlaceholder: "اكتب رسالة لنفسك (مثال: توقف! أنت أقوى من هذه العادة.)",
      audioReminderLabel: "تذكير صوتي (اختياري)",
      recordAudio: "تسجيل مقطع صوتي",
      uploadAudio: "اختيار ملف صوتي",
      deleteAudio: "حذف المقطع الصوتي",
      saveHabit: "إضافة عادة جديدة",
      recordingToastTitle: "بدء التسجيل...",
      recordingToastDescription: "تحدث الآن.",
      micErrorToastTitle: "خطأ في الوصول إلى الميكروفون",
      micErrorToastDescription: "يرجى التأكد من أنك سمحت بالوصول إلى الميكروفون في إعدادات المتصفح.",
      invalidFileToastTitle: "ملف غير صالح",
      invalidFileToastDescription: "الرجاء اختيار ملف صوتي.",
      missingFieldsToastTitle: "حقول ناقصة",
      missingFieldsToastDescription: "يرجى ملء وصف العادة ومحتوى رسالة التذكير.",
      habitAddedToastTitle: "تمت إضافة العادة بنجاح!",
      habitAddedToastDescription: "يمكنك رؤية عادتك الجديدة في تبويب 'عاداتي'.",
      intervalUnit: {
        seconds: { singular: "ثانية", dual: "ثانيتان", plural: "ثواني" },
        minutes: { singular: "دقيقة", dual: "دقيقتان", plural: "دقائق" },
        hours: { singular: "ساعة", dual: "ساعتان", plural: "ساعات" },
        days: { singular: "يوم", dual: "يومان", plural: "أيام" },
      }
    },
    home: {
      previous: "السابق",
      next: "التالي",
      summarizeBook: "لخّص لي كتابًا",
      loadingSummary: "جاري التلخيص...",
      summaryBy: "بواسطة: ",
      errorTitle: "خطأ",
      errorAuthor: "النظام",
      errorSummary: "عذرًا، لم نتمكن من تلخيص كتاب في الوقت الحالي. يرجى المحاولة مرة أخرى لاحقًا.",
    },
    notes: {
        title: "تدوين الملاحظات",
        description: "اكتب أفكارك، أهدافك، أو أي شيء يلهمك هنا.",
        placeholder: "ابدأ الكتابة...",
        saved: "تم الحفظ."
    },
    remembrancesData: {
      morningRemembrances: [
        {
            id: 1,
            arabicText: 'أَعُوذُ بِاللهِ مِنْ الشَّيْطَانِ الرَّجِيمِ\nاللّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ cِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ. [آية الكرسى - البقرة 255]',
            translation: '',
            count: 1,
            virtue: 'من قالها حين يصبح أجير من الجن حتى يمسي، ومن قالها حين يمسي أجير منهم حتى يصبح.'
        },
        {
            id: 2,
            arabicText: 'قُلْ هُوَ اللَّهُ أَحَدٌ.. * قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ.. * قُلْ أَعُوذُ بِرَبِّ النَّاسِ..',
            translation: '',
            count: 3,
            virtue: 'من قالها ثلاث مرات حين يصبح وحين يمسي كفته من كل شيء.'
        },
        {
            id: 3,
            arabicText: 'أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذَا الْيَوْمِ وَخَيْرَ مَا بَعْدَهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذَا الْيَوْمِ وَشَرِّ مَا بَعْدَهُ، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ.',
            translation: '',
            count: 1,
            virtue: ''
        },
        {
            id: 4,
            arabicText: 'اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ وَإِلَيْكَ النُّشُورُ.',
            translation: '',
            count: 1,
            virtue: ''
        },
        {
            id: 5,
            arabicText: 'اللَّهُمَّ أَنْتَ رَبِّي لاَ إِلَهَ إِلاَّ أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْfِرْ لِي فَإِنَّهُ لاَ يَغْفِرُ الذُّنُوبَ إِلاَّ أَنْتَ.',
            translation: '',
            count: 1,
            virtue: 'من قالها موقنا بها حين يصبح فمات من يومه دخل الجنة، ومن قالها موقنا بها حين يمسي فمات من ليلته دخل الجنة.'
        },
        {
            id: 6,
            arabicText: 'اللَّهُمَّ إِنِّي أَصْبَحْتُ أُشْهِدُكَ، وَأُشْهِدُ حَمَلَةَ عَرْشِكَ، وَمَلاَئِكَتَكَ، وَجَمِيعَ خَلْقِكَ، أَنَّكَ أَنْتَ اللَّهُ لاَ إِلَهَ إِلاَّ أَنْتَ وَحْدَكَ لاَ شَرِيكَ لَكَ، وَأَنَّ مُحَمَّداً عَبْدُكَ وَرَسُولُكَ.',
            translation: '',
            count: 4,
            virtue: 'من قالها حين يصبح أو يمسي أربع مرات أعتقه الله من النار.'
        },
        {
            id: 7,
            arabicText: 'اللَّهُمَّ مَا أَصْبَحَ بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ فَمِنْكَ وَحْدَكَ لاَ شَرِيكَ لَكَ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ.',
            translation: '',
            count: 1,
            virtue: 'من قالها حين يصبح فقد أدى شكر يومه، ومن قالها حين يمسي فقد أدى شكر ليلته.'
        },
        {
            id: 8,
            arabicText: 'اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لاَ إِلَهَ إِلاَّ أَنْتَ. اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ، وَالْفَقْرِ، وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، لاَ إِلَهَ إِلاَّ أَنْتَ.',
            translation: '',
            count: 3,
            virtue: ''
        },
        {
            id: 9,
            arabicText: 'حَسْبِيَ اللَّهُ لاَ إِلَهَ إِلاَّ هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ.',
            translation: '',
            count: 7,
            virtue: 'من قالها حين يصبح وحين يمسي سبع مرات كفاه الله ما أهمه من أمر الدنيا والآخرة.'
        },
        {
            id: 10,
            arabicText: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالآخِرَةِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ: فِي دِينِي وَدُنْيَايَ وَأَهْلِي، وَمَالِي، اللَّهُمَّ اسْتُرْ عَوْرَاتِي، وَآمِنْ رَوْعَاتِي، اللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ، وَمِنْ خَلْفِي، وَعَنْ يَمِينِي، وَعَنْ شِمَالِي، وَمِنْ فَوْقِي، وَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي.',
            translation: '',
            count: 1,
            virtue: ''
        },
        {
            id: 11,
            arabicText: 'اللَّهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ فَاطِرَ السَّمَاوَاتِ وَالأَرْضِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيكَهُ، أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ أَنْتَ، أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي، وَمِنْ شَرِّ الشَّيْطَانِ وَشِرْكِهِ، وَأَنْ أَقْتَرِفَ عَلَى نَفْسِي سُوءاً، أَوْ أَجُرَّهُ إِلَى مُسْلِمٍ.',
            translation: '',
            count: 1,
            virtue: ''
        },
        {
            id: 12,
            arabicText: 'بِسْمِ اللَّهِ الَّذِي لاَ يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الأَرْضِ وَلاَ فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ.',
            translation: '',
            count: 3,
            virtue: 'من قالها ثلاثاً إذا أصبح وثلاثاً إذا أمسى لم يضره شيء.'
        },
        {
            id: 13,
            arabicText: 'رَضِيتُ بِاللَّهِ رَبَّاً، وَبِالإِسْلاَمِ دِيناً، وَبِمُحَمَّدٍ صلى الله عليه وسلم نَبِيّاً.',
            translation: '',
            count: 3,
            virtue: 'من قالها ثلاثاً حين يصبح وثلاثاً حين يمسي كان حقاً على الله أن يرضيه يوم القيامة.'
        },
        {
            id: 14,
            arabicText: 'يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ أَصْلِحْ لِي شَأْنِي كُلَّهُ وَلاَ تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ.',
            translation: '',
            count: 3,
            virtue: ''
        },
        {
            id: 15,
            arabicText: 'أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ رَبِّ الْعَالَمِينَ، اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذَا الْيَوْمِ: فَتْحَهُ، وَنَصْرَهُ، وَنُورَهُ، وَبَرَكَتَهُ، وَهُدَاهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِيهِ وَشَرِّ مَا بَعْدَهُ.',
            translation: '',
            count: 1,
            virtue: ''
        },
        {
            id: 16,
            arabicText: 'أَصْبَحْنا عَلَى فِطْرَةِ الإسْلاَمِ، وَعَلَى كَلِمَةِ الإِخْلاَصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ صلى الله عليه وسلم، وَعَلَى مِلَّةِ أَبِينَا إبْرَاهِيمَ، حَنِيفاً مُسْلِماً وَمَا كَانَ مِنَ الْمُشْرِكِينَ.',
            translation: '',
            count: 1,
            virtue: ''
        },
        {
            id: 17,
            arabicText: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ.',
            translation: '',
            count: 100,
            virtue: 'من قالها مائة مرة حين يصبح وحين يمسي لم يأت أحد يوم القيامة بأفضل مما جاء به إلا أحد قال مثل ما قال أو زاد عليه.'
        },
        {
            id: 18,
            arabicText: 'لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.',
            translation: '',
            count: 10,
            virtue: 'من قالها عشر مرات كانت له عدل عشر رقاب، وكتبت له مائة حسنة، ومحيت عنه مائة سيئة، وكانت له حرزاً من الشيطان يومه ذلك حتى يمسي، ولم يأت أحد بأفضل مما جاء به إلا أحد عمل أكثر من ذلك.'
        },
        {
            id: 19,
            arabicText: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ: عَدَدَ خَلْقِهِ، وَرِضَا نَفْسِهِ، وَزِنَةَ عَرْشِهِ، وَمِدَادَ كَلِمَاتِهِ.',
            translation: '',
            count: 3,
            virtue: ''
        },
        {
            id: 20,
            arabicText: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْماً نَافِعاً، وَرِزْقاً طَيِّباً، وَعَمَلاً مُتَقَبَّلاً.',
            translation: '',
            count: 1,
            virtue: ''
        },
        {
            id: 21,
            arabicText: 'أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ.',
            translation: '',
            count: 100,
            virtue: ''
        },
        {
            id: 22,
            arabicText: 'اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبَيِّنَا مُحَمَّدٍ.',
            translation: '',
            count: 10,
            virtue: 'من صلى علي حين يصبح عشراً، وحين يمسي عشراً، أدركته شفاعتي يوم القيامة.'
        }
      ],
      eveningRemembrances: [
        {
            id: 1,
            arabicText: 'أَعُوذُ بِاللهِ مِنْ الشَّيْطَانِ الرَّجِيمِ\nاللّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ. [آية الكرسى - البقرة 255]',
            translation: '',
            count: 1,
            virtue: 'من قالها حين يمسي أجير من الجن حتى يصبح، ومن قالها حين يصبح أجير منهم حتى يمسي.'
        },
        {
            id: 2,
            arabicText: 'قُلْ هُوَ اللَّهُ أَحَدٌ.. * قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ.. * قُلْ أَعُوذُ بِرَبِّ النَّاسِ..',
            translation: '',
            count: 3,
            virtue: 'من قالها ثلاث مرات حين يصبح وحين يمسي كفته من كل شيء.'
        },
        {
            id: 3,
            arabicText: 'أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذِهِ اللَّيْلَةِ وَخَيْرَ مَا بَعْدَهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذِهِ اللَّيْلَةِ وَشَرِّ مَا بَعْدَهَا، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ.',
            translation: '',
            count: 1,
            virtue: ''
        },
        {
            id: 4,
            arabicText: 'اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ وَإِلَيْكَ الْمَصِيرُ.',
            translation: '',
            count: 1,
            virtue: ''
        },
        {
            id: 5,
            arabicText: 'اللَّهُمَّ أَنْتَ رَبِّي لاَ إِلَهَ إِلاَّ أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْfِرْ لِي فَإِنَّهُ لاَ يَغْفِرُ الذُّنُوبَ إِلاَّ أَنْتَ.',
            translation: '',
            count: 1,
            virtue: 'من قالها موقنا بها حين يمسي فمات من ليلته دخل الجنة، ومن قالها موقنا بها حين يصبح فمات من يومه دخل الجنة.'
        },
        {
            id: 6,
            arabicText: 'اللَّهُمَّ إِنِّي أَمْسَيْتُ أُشْهِدُكَ، وَأُشْهِدُ حَمَلَةَ عَرْشِكَ، وَمَلاَئِكَتَكَ، وَجَمِيعَ خَلْقِكَ، أَنَّكَ أَنْتَ اللَّهُ لاَ إِلَهَ إِلاَّ أَنْتَ وَحْدَكَ لاَ شَرِيكَ لَكَ، وَأَنَّ مُحَمَّداً عَبْدُكَ وَرَسُولُكَ.',
            translation: '',
            count: 4,
            virtue: 'من قالها حين يمسي أو يصبح أربع مرات أعتقه الله من النار.'
        },
        {
            id: 7,
            arabicText: 'اللَّهُمَّ مَا أَمْسَى بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ فَمِنْكَ وَحْدَكَ لاَ شَرِيكَ لَكَ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ.',
            translation: '',
            count: 1,
            virtue: 'من قالها حين يمسي فقد أدى شكر ليلته، ومن قالها حين يصبح فقد أدى شكر يومه.'
        },
        {
            id: 8,
            arabicText: 'اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لاَ إِلَهَ إِلاَّ أَنْتَ. اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ، وَالْفَقْرِ، وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، لاَ إِلَهَ إِلاَّ أَنْتَ.',
            translation: '',
            count: 3,
            virtue: ''
        },
        {
            id: 9,
            arabicText: 'حَسْبِيَ اللَّهُ لاَ إِلَهَ إِلاَّ هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ.',
            translation: '',
            count: 7,
            virtue: 'من قالها حين يمسي وحين يصبح سبع مرات كفاه الله ما أهمه من أمر الدنيا والآخرة.'
        },
        {
            id: 10,
            arabicText: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالآخِرَةِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ: فِي دِينِي وَدُنْيَايَ وَأَهْلِي، وَمَالِي، اللَّهُمَّ اسْتُرْ عَوْرَاتِي، وَآمِنْ رَوْعَاتِي، اللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ، وَمِنْ خَلْفِي، وَعَنْ يَمِينِي، وَعَنْ شِمَالِي، وَمِنْ فَوْقِي، وَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي.',
            translation: '',
            count: 1,
            virtue: ''
        },
        {
            id: 11,
            arabicText: 'اللَّهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ فَاطِرَ السَّمَاوَاتِ وَالأَرْضِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيكَهُ، أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ أَنْتَ، أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي، وَمِنْ شَرِّ الشَّيْطَانِ وَشِرْكِهِ، وَأَنْ أَقْتَرِفَ عَلَى نَفْسِي سُوءاً، أَوْ أَجُرَّهُ إِلَى مُسْلِمٍ.',
            translation: '',
            count: 1,
            virtue: ''
        },
        {
            id: 12,
            arabicText: 'بِسْمِ اللَّهِ الَّذِي لاَ يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الأَرْضِ وَلاَ فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ.',
            translation: '',
            count: 3,
            virtue: 'من قالها ثلاثاً إذا أمسى وثلاثاً إذا أصبح لم يضره شيء.'
        },
        {
            id: 13,
            arabicText: 'رَضِيتُ بِاللَّهِ رَبَّاً، وَبِالإِسْلاَمِ دِيناً، وَبِمُحَمَّدٍ صلى الله عليه وسلم نَبِيّاً.',
            translation: '',
            count: 3,
            virtue: 'من قالها ثلاثاً حين يمسي وثلاثاً حين يصبح كان حقاً على الله أن يرضيه يوم القيامة.'
        },
        {
            id: 14,
            arabicText: 'يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ أَصْلِحْ لِي شَأْنِي كُلَّهُ وَلاَ تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ.',
            translation: '',
            count: 1,
            virtue: ''
        },
        {
            id: 15,
            arabicText: 'أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ رَبِّ الْعَالَمِينَ، اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذِهِ اللَّيْلَةِ: فَتْحَهَا، وَنَصْرَهَا، وَنُورَهَا، وَبَرَكَتَهَا، وَهُدَاهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِيهَا وَشَرِّ مَا بَعْدَهَا.',
            translation: '',
            count: 1,
            virtue: ''
        },
        {
            id: 16,
            arabicText: 'أَمْسَيْنا عَلَى فِطْرَةِ الإسْلاَمِ، وَعَلَى كَلِمَةِ الإِخْلاَصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ صلى الله عليه وسلم، وَعَلَى مِلَّةِ أَبِينَا إبْرَاهِيمَ، حَنِيفاً مُسْلِماً وَمَا كَانَ مِنَ الْمُشْرِكِينَ.',
            translation: '',
            count: 1,
            virtue: ''
        },
        {
            id: 17,
            arabicText: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ.',
            translation: '',
            count: 100,
            virtue: 'من قالها مائة مرة حين يمسي وحين يصبح لم يأت أحد يوم القيامة بأفضل مما جاء به إلا أحد قال مثل ما قال أو زاد عليه.'
        },
        {
            id: 18,
            arabicText: 'لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.',
            translation: '',
            count: 10,
            virtue: 'من قالها عشر مرات كانت له عدل عشر رقاب، وكتبت له مائة حسنة، ومحيت عنه مائة سيئة، وكانت له حرزاً من الشيطان ليلته تلك حتى يصبح، ولم يأت أحد بأفضل مما جاء به إلا أحد عمل أكثر من ذلك.'
        },
        {
            id: 19,
            arabicText: 'أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ.',
            translation: '',
            count: 100,
            virtue: ''
        },
        {
            id: 20,
            arabicText: 'أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ.',
            translation: '',
            count: 3,
            virtue: 'من قالها ثلاث مرات إذا أمسى لم يضره لدغة حية في تلك الليلة.'
        },
        {
            id: 21,
            arabicText: 'اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبَيِّنَا مُحَمَّدٍ.',
            translation: '',
            count: 10,
            virtue: 'من صلى علي حين يمسي عشراً، وحين يصبح عشراً، أدركته شفاعتي يوم القيامة.'
        }
      ]
    }
  },
  tr: {
    mainTabs: {
      home: "Ana Sayfa",
      habits: "Alışkanlıklar",
      remembrances: "Zikirler",
      settings: "Ayarlar",
      notes: "Notlar",
    },
    settings: {
      title: "Ayarlar",
      language: "Dil",
      selectLanguage: "Dil Seçin",
      theme: "Tema",
      selectTheme: "Bir Tema Seçin",
      light: "Açık",
      dark: "Koyu",
      notifications: "Bildirimleri Etkinleştir",
    },
    remembrances: {
      morning: "Sabah Zikirleri",
      evening: "Akşam Zikirleri",
      virtue: "Fazilet",
    },
    habits: {
      newSetup: "Yeni Kurulum",
      myHabits: "Alışkanlıklarım",
      noHabitsTitle: "Mevcut alışkanlık yok",
      noHabitsDescription: "İlk alışkanlığınızı izlemeye başlamak için 'Yeni Kurulum'a gidin.",
      deleteHabit: "Alışkanlığı Sil",
      habitDescriptionLabel: "Hangi alışkanlığı izlemek istiyorsunuz?",
      habitDescriptionPlaceholder: "Örn. tırnak yeme, sosyal medyada gezinme...",
      reminderFrequencyLabel: "Ne sıklıkla hatırlatılmak istersiniz?",
      every: "Her",
      intervalPlaceholder: "Aralık değeri",
      unit: "Birim",
      seconds: "Saniye",
      minutes: "Dakika",
      hours: "Saat",
      days: "Gün",
      reminderMessageLabel: "Hatırlatma mesajı içeriği",
      reminderMessagePlaceholder: "Kendinize bir mesaj yazın (Örn. Dur! Bu alışkanlıktan daha güçlüsün.)",
      audioReminderLabel: "Sesli Hatırlatma (isteğe bağlı)",
      recordAudio: "Ses Kaydet",
      uploadAudio: "Ses Dosyası Yükle",
      deleteAudio: "Sesi Sil",
      saveHabit: "Yeni Alışkanlık Ekle",
      recordingToastTitle: "Kayıt başladı...",
      recordingToastDescription: "Şimdi konuşun.",
      micErrorToastTitle: "Mikrofon Erişim Hatası",
      micErrorToastDescription: "Lütfen tarayıcı ayarlarınızdan mikrofon erişimine izin verdiğinizden emin olun.",
      invalidFileToastTitle: "Geçersiz Dosya",
      invalidFileToastDescription: "Lütfen bir ses dosyası seçin.",
      missingFieldsToastTitle: "Eksik Alanlar",
      missingFieldsToastDescription: "Lütfen alışkanlık açıklamasını ve hatırlatma mesajı içeriğini doldurun.",
      habitAddedToastTitle: "Alışkanlık başarıyla eklendi!",
      habitAddedToastDescription: "Yeni alışkanlığınızı 'Alışkanlıklarım' sekmesinde görebilirsiniz.",
      intervalUnit: {
        seconds: { singular: "saniye", plural: "saniye" },
        minutes: { singular: "dakika", plural: "dakika" },
        hours: { singular: "saat", plural: "saat" },
        days: { singular: "gün", plural: "gün" },
      }
    },
    home: {
      previous: "Önceki",
      next: "Sonraki",
      summarizeBook: "Bana bir kitap özetle",
      loadingSummary: "Özetleniyor...",
      summaryBy: "Yazan: ",
      errorTitle: "Hata",
      errorAuthor: "Sistem",
      errorSummary: "Üzgünüz, şu anda bir kitap özetleyemedik. Lütfen daha sonra tekrar deneyin.",
    },
    notes: {
        title: "Not Alma",
        description: "Düşüncelerinizi, hedeflerinizi veya size ilham veren herhangi bir şeyi buraya yazın.",
        placeholder: "Yazmaya başla...",
        saved: "Kaydedildi."
    },
    remembrancesData: {
        morningRemembrances: [
          {
              id: 1,
              arabicText: 'أَعُوذُ بِاللهِ مِنْ الشَّيْطَانِ الرَّجِيمِ\nاللّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ. [آية الكرسى - البقرة 255]',
              translation: 'Kovulmuş şeytandan Allah\'a sığınırım.\nAllah, O\'ndan başka ilah yoktur. O, diridir, her şeyin varlığı O\'na bağlı ve dayalıdır. O\'nu ne bir uyuklama tutabilir, ne de bir uyku. Göklerde ve yerde ne varsa hepsi O\'nundur. İzni olmadan O\'nun katında kim şefaat edebilir? O, kullarının önlerindekileri ve arkalarındakileri bilir. Onlar O\'nun ilminden, O\'nun dilediği kadarından başka bir şey kavrayamazlar. O\'nun kürsüsü, gökleri ve yeri kaplamıştır. Onları koruyup gözetmek O\'na ağır gelmez. O, çok yücedir, çok büyüktür. [Ayet-el Kürsi, Bakara 255]',
              count: 1,
              virtue: 'Kim bunu sabah okursa akşama kadar cinlerden korunur, kim de akşam okursa sabaha kadar onlardan korunur.'
          },
          {
              id: 2,
              arabicText: 'قُلْ هُوَ اللَّهُ أَحَدٌ.. * قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ.. * قُلْ أَعُوذُ بِرَبِّ النَّاسِ..',
              translation: 'De ki: O, Allah\'tır, tektir... * De ki: Sabahın Rabbine sığınırım... * De ki: İnsanların Rabbine sığınırım...',
              count: 3,
              virtue: 'Kim bunları sabah ve akşam üçer defa okursa, her şeye karşı ona yeterli gelir.'
          }
        ],
        eveningRemembrances: [
           {
              id: 1,
              arabicText: 'أَعُوذُ بِاللهِ مِنْ الشَّيْطَانِ الرَّجِيمِ\nاللّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ. [آية الكرسى - البقرة 255]',
              translation: 'Kovulmuş şeytandan Allah\'a sığınırım.\nAllah, O\'ndan başka ilah yoktur. O, diridir, her şeyin varlığı O\'na bağlı ve dayalıdır. O\'nu ne bir uyuklama tutabilir, ne de bir uyku. Göklerde ve yerde ne varsa hepsi O\'nundur. İzni olmadan O\'nun katında kim şefaat edebilir? O, kullarının önlerindekileri ve arkalarındakileri bilir. Onlar O\'nun ilminden, O\'nun dilediği kadarından başka bir şey kavrayamazlar. O\'nun kürsüsü, gökleri ve yeri kaplamıştır. Onları koruyup gözetmek O\'na ağır gelmez. O, çok yücedir, çok büyüktür. [Ayet-el Kürsi, Bakara 255]',
              count: 1,
              virtue: 'Kim bunu akşam okursa sabaha kadar cinlerden korunur, kim de sabah okursa akşama kadar onlardan korunur.'
          },
          {
              id: 2,
              arabicText: 'قُلْ هُوَ اللَّهُ أَحَدٌ.. * قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ.. * قُلْ أَعُوذُ بِرَبِّ النَّاسِ..',
              translation: 'De ki: O, Allah\'tır, tektir... * De ki: Sabahın Rabbine sığınırım... * De ki: İnsanların Rabbine sığınırım...',
              count: 3,
              virtue: 'Kim bunları sabah ve akşam üçer defa okursa, her şeye karşı ona yeterli gelir.'
          }
        ]
    }
  },
  id: {
    mainTabs: {
      home: "Beranda",
      habits: "Kebiasaan",
      remembrances: "Dzikir",
      settings: "Pengaturan",
      notes: "Catatan",
    },
    settings: {
      title: "Pengaturan",
      language: "Bahasa",
      selectLanguage: "Pilih Bahasa",
      theme: "Tema",
      selectTheme: "Pilih Tema",
      light: "Terang",
      dark: "Gelap",
      notifications: "Aktifkan Notifikasi",
    },
    remembrances: {
      morning: "Dzikir Pagi",
      evening: "Dzikir Petang",
      virtue: "Keutamaan",
    },
    habits: {
      newSetup: "Pengaturan Baru",
      myHabits: "Kebiasaan Saya",
      noHabitsTitle: "Tidak ada kebiasaan saat ini",
      noHabitsDescription: "Buka 'Pengaturan Baru' untuk mulai melacak kebiasaan pertama Anda.",
      deleteHabit: "Hapus Kebiasaan",
      habitDescriptionLabel: "Kebiasaan apa yang ingin Anda lacak?",
      habitDescriptionPlaceholder: "misalnya menggigit kuku, scrolling media sosial...",
      reminderFrequencyLabel: "Seberapa sering Anda ingin diingatkan?",
      every: "Setiap",
      intervalPlaceholder: "Nilai interval",
      unit: "Satuan",
      seconds: "Detik",
      minutes: "Menit",
      hours: "Jam",
      days: "Hari",
      reminderMessageLabel: "Isi pesan pengingat",
      reminderMessagePlaceholder: "Tulis pesan untuk diri sendiri (misalnya, Berhenti! Anda lebih kuat dari kebiasaan ini.)",
      audioReminderLabel: "Pengingat Audio (opsional)",
      recordAudio: "Rekam Audio",
      uploadAudio: "Unggah File Audio",
      deleteAudio: "Hapus Audio",
      saveHabit: "Tambah Kebiasaan Baru",
      recordingToastTitle: "Perekaman dimulai...",
      recordingToastDescription: "Bicaralah sekarang.",
      micErrorToastTitle: "Kesalahan Akses Mikrofon",
      micErrorToastDescription: "Harap pastikan Anda telah mengizinkan akses mikrofon di pengaturan browser Anda.",
      invalidFileToastTitle: "File Tidak Valid",
      invalidFileToastDescription: "Silakan pilih file audio.",
      missingFieldsToastTitle: "Bidang yang Hilang",
      missingFieldsToastDescription: "Harap isi deskripsi kebiasaan dan konten pesan pengingat.",
      habitAddedToastTitle: "Kebiasaan berhasil ditambahkan!",
      habitAddedToastDescription: "Anda dapat melihat kebiasaan baru Anda di tab 'Kebiasaan Saya'.",
       intervalUnit: {
        seconds: { singular: "detik", plural: "detik" },
        minutes: { singular: "menit", plural: "menit" },
        hours: { singular: "jam", plural: "jam" },
        days: { singular: "hari", plural: "hari" },
      }
    },
    home: {
      previous: "Sebelumnya",
      next: "Berikutnya",
      summarizeBook: "Rangkumkan sebuah buku untukku",
      loadingSummary: "Meringkas...",
      summaryBy: "Oleh: ",
      errorTitle: "Kesalahan",
      errorAuthor: "Sistem",
      errorSummary: "Maaf, kami tidak dapat merangkum buku saat ini. Silakan coba lagi nanti.",
    },
    notes: {
        title: "Mencatat",
        description: "Tuliskan pemikiran, tujuan, atau apa pun yang menginspirasi Anda di sini.",
        placeholder: "Mulai menulis...",
        saved: "Tersimpan."
    },
    remembrancesData: {
        morningRemembrances: [
          {
              id: 1,
              arabicText: 'أَعُوذُ بِاللهِ مِنْ الشَّيْطَانِ الرَّجِيمِ\nاللّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ. [آية الكرسى - البقرة 255]',
              translation: 'Aku berlindung kepada Allah dari godaan syaitan yang terkutuk.\nAllah, tidak ada Tuhan (yang berhak disembah) melainkan Dia Yang Hidup kekal lagi terus menerus mengurus (makhluk-Nya); tidak mengantuk dan tidak tidur. Kepunyaan-Nya apa yang di langit dan di bumi. Tiada yang dapat memberi syafa\'at di sisi Allah tanpa izin-Nya. Allah mengetahui apa-apa yang di hadapan mereka dan di belakang mereka, dan mereka tidak mengetahui apa-apa dari ilmu Allah melainkan apa yang dikehendaki-Nya. Kursi Allah meliputi langit dan bumi. Dan Allah tidak merasa berat memelihara keduanya, dan Allah Maha Tinggi lagi Maha Besar. [Ayat Kursi, Al-Baqarah 255]',
              count: 1,
              virtue: 'Barangsiapa membacanya di pagi hari maka ia akan dilindungi dari jin hingga sore hari, dan barangsiapa membacanya di sore hari maka ia akan dilindungi dari mereka hingga pagi hari.'
          },
          {
              id: 2,
              arabicText: 'قُلْ هُوَ اللَّهُ أَحَدٌ.. * قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ.. * قُلْ أَعُوذُ بِرَبِّ النَّاسِ..',
              translation: 'Katakanlah: Dialah Allah, Yang Maha Esa... * Katakanlah: Aku berlindung kepada Tuhan Yang Menguasai subuh... * Katakanlah: Aku berlindung kepada Tuhan (yang memelihara dan menguasai) manusia...',
              count: 3,
              virtue: 'Barangsiapa membacanya tiga kali di pagi dan sore hari, maka itu akan mencukupinya dari segala sesuatu.'
          }
        ],
        eveningRemembrances: [
          {
              id: 1,
              arabicText: 'أَعُوذُ بِاللهِ مِنْ الشَّيْطَانِ الرَّجِيمِ\nاللّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ. [آية الكرسى - البقرة 255]',
              translation: 'Aku berlindung kepada Allah dari godaan syaitan yang terkutuk.\nAllah, tidak ada Tuhan (yang berhak disembah) melainkan Dia Yang Hidup kekal lagi terus menerus mengurus (makhluk-Nya); tidak mengantuk dan tidak tidur. Kepunyaan-Nya apa yang di langit dan di bumi. Tiada yang dapat memberi syafa\'at di sisi Allah tanpa izin-Nya. Allah mengetahui apa-apa yang di hadapan mereka dan di belakang mereka, dan mereka tidak mengetahui apa-apa dari ilmu Allah melainkan apa yang dikehendaki-Nya. Kursi Allah meliputi langit dan bumi. Dan Allah tidak merasa berat memelihara keduanya, dan Allah Maha Tinggi lagi Maha Besar. [Ayat Kursi, Al-Baqarah 255]',
              count: 1,
              virtue: 'Barangsiapa membacanya di sore hari maka ia akan dilindungi dari jin hingga pagi hari, dan barangsiapa membacanya di pagi hari maka ia akan dilindungi dari mereka hingga sore hari.'
          },
          {
              id: 2,
              arabicText: 'قُلْ هُوَ اللَّهُ أَحَدٌ.. * قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ.. * قُلْ أَعُوذُ بِرَبِّ النَّاسِ..',
              translation: 'Katakanlah: Dialah Allah, Yang Maha Esa... * Katakanlah: Aku berlindung kepada Tuhan Yang Menguasai subuh... * Katakanlah: Aku berlindung kepada Tuhan (yang memelihara dan menguasai) manusia...',
              count: 3,
              virtue: 'Barangsiapa membacanya tiga kali di pagi dan sore hari, maka itu akan mencukupinya dari segala sesuatu.'
          }
        ]
    }
  },
  fr: {
    mainTabs: {
      home: "Accueil",
      habits: "Habitudes",
      remembrances: "Souvenirs",
      settings: "Paramètres",
      notes: "Notes",
    },
    settings: {
      title: "Paramètres",
      language: "Langue",
      selectLanguage: "Choisir la langue",
      theme: "Thème",
      selectTheme: "Choisir un thème",
      light: "Clair",
      dark: "Sombre",
      notifications: "Activer les notifications",
    },
    remembrances: {
      morning: "Souvenirs du Matin",
      evening: "Souvenirs du Soir",
      virtue: "Vertu",
    },
    habits: {
      newSetup: "Nouvelle Configuration",
      myHabits: "Mes Habitudes",
      noHabitsTitle: "Aucune habitude actuelle",
      noHabitsDescription: "Allez dans 'Nouvelle Configuration' pour commencer à suivre votre première habitude.",
      deleteHabit: "Supprimer l'habitude",
      habitDescriptionLabel: "Quelle habitude voulez-vous suivre ?",
      habitDescriptionPlaceholder: "ex: se ronger les ongles, faire défiler les réseaux sociaux...",
      reminderFrequencyLabel: "À quelle fréquence voulez-vous être rappelé ?",
      every: "Chaque",
      intervalPlaceholder: "Valeur de l'intervalle",
      unit: "Unité",
      seconds: "Secondes",
      minutes: "Minutes",
      hours: "Heures",
      days: "Jours",
      reminderMessageLabel: "Contenu du message de rappel",
      reminderMessagePlaceholder: "Écrivez un message pour vous-même (ex: Arrête ! Tu es plus fort que cette habitude.)",
      audioReminderLabel: "Rappel Audio (optionnel)",
      recordAudio: "Enregistrer un audio",
      uploadAudio: "Télécharger un fichier audio",
      deleteAudio: "Supprimer l'audio",
      saveHabit: "Ajouter une nouvelle habitude",
      recordingToastTitle: "Enregistrement démarré...",
      recordingToastDescription: "Parlez maintenant.",
      micErrorToastTitle: "Erreur d'accès au microphone",
      micErrorToastDescription: "Veuillez vous assurer que vous avez autorisé l'accès au microphone dans les paramètres de votre navigateur.",
      invalidFileToastTitle: "Fichier invalide",
      invalidFileToastDescription: "Veuillez sélectionner un fichier audio.",
      missingFieldsToastTitle: "Champs manquants",
      missingFieldsToastDescription: "Veuillez remplir la description de l'habitude et le contenu du message de rappel.",
      habitAddedToastTitle: "Habitude ajoutée avec succès !",
      habitAddedToastDescription: "Vous pouvez voir votre nouvelle habitude dans l'onglet 'Mes Habitudes'.",
      intervalUnit: {
        seconds: { singular: "seconde", plural: "secondes" },
        minutes: { singular: "minute", plural: "minutes" },
        hours: { singular: "heure", plural: "heures" },
        days: { singular: "jour", plural: "jours" },
      }
    },
    home: {
      previous: "Précédent",
      next: "Suivant",
      summarizeBook: "Résume-moi un livre",
      loadingSummary: "Résumé en cours...",
      summaryBy: "Par : ",
      errorTitle: "Erreur",
      errorAuthor: "Système",
      errorSummary: "Désolé, nous n'avons pas pu résumer de livre pour le moment. Veuillez réessayer plus tard.",
    },
    notes: {
        title: "Prise de notes",
        description: "Notez ici vos pensées, vos objectifs ou tout ce qui vous inspire.",
        placeholder: "Commencez à écrire...",
        saved: "Enregistré."
    },
     remembrancesData: {
        morningRemembrances: [
          {
              id: 1,
              arabicText: 'أَعُوذُ بِاللهِ مِنْ الشَّيْطَانِ الرَّجِيمِ\nاللّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ. [آية الكرسى - البقرة 255]',
              translation: 'Je cherche refuge auprès d\'Allah contre Satan le maudit.\nAllah ! Point de divinité à part Lui, le Vivant, Celui qui subsiste par lui-même. Ni somnolence ni sommeil ne Le saisissent. A Lui appartient tout ce qui est dans les cieux et sur la terre. Qui peut intercéder auprès de Lui sans Sa permission ? Il connaît leur passé et leur futur. Et, de Sa science, ils n\'embrassent que ce qu\'Il veut. Son Trône déborde les cieux et la terre, dont la garde ne Lui coûte aucune peine. Et Il est le Très Haut, le Très Grand. [Ayat-ul-Kursi, Al-Baqarah 255]',
              count: 1,
              virtue: 'Quiconque le dit le matin est protégé des djinns jusqu\'au soir, et quiconque le dit le soir est protégé d\'eux jusqu\'au matin.'
          },
          {
              id: 2,
              arabicText: 'قُلْ هُوَ اللَّهُ أَحَدٌ.. * قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ.. * قُلْ أَعُوذُ بِرَبِّ النَّاسِ..',
              translation: 'Dis : "Il est Allah, Unique... * Dis : "Je cherche protection auprès du Seigneur de l\'aube naissante... * Dis : "Je cherche protection auprès du Seigneur des hommes...',
              count: 3,
              virtue: 'Quiconque les dit trois fois le matin et le soir, elles lui suffiront contre toute chose.'
          }
        ],
        eveningRemembrances: [
          {
              id: 1,
              arabicText: 'أَعُوذُ بِاللهِ مِنْ الشَّيْطَانِ الرَّجِيمِ\nاللّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ. [آية الكرسى - البقرة 255]',
              translation: 'Je cherche refuge auprès d\'Allah contre Satan le maudit.\nAllah ! Point de divinité à part Lui, le Vivant, Celui qui subsiste par lui-même. Ni somnolence ni sommeil ne Le saisissent. A Lui appartient tout ce qui est dans les cieux et sur la terre. Qui peut intercéder auprès de Lui sans Sa permission ? Il connaît leur passé et leur futur. Et, de Sa science, ils n\'embrassent que ce qu\'Il veut. Son Trône déborde les cieux et la terre, dont la garde ne Lui coûte aucune peine. Et Il est le Très Haut, le Très Grand. [Ayat-ul-Kursi, Al-Baqarah 255]',
              count: 1,
              virtue: 'Quiconque le dit le soir est protégé des djinns jusqu\'au matin, et quiconque le dit le matin est protégé d\'eux jusqu\'au soir.'
          },
          {
              id: 2,
              arabicText: 'قُلْ هُوَ اللَّهُ أَحَدٌ.. * قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ.. * قُلْ أَعُوذُ بِرَبِّ النَّاسِ..',
              translation: 'Dis : "Il est Allah, Unique... * Dis : "Je cherche protection auprès du Seigneur de l\'aube naissante... * Dis : "Je cherche protection auprès du Seigneur des hommes...',
              count: 3,
              virtue: 'Quiconque les dit trois fois le matin et le soir, elles lui suffiront contre toute chose.'
          }
        ]
    }
  },
};

// Add a placeholder for remembrances in languages where they are not yet translated
const addPlaceholders = (languages: (keyof typeof dictionaries)[]) => {
  const arabicMorn = dictionaries.ar.remembrancesData.morningRemembrances;
  const arabicEven = dictionaries.ar.remembrancesData.eveningRemembrances;

  for (const lang of languages) {
    if (dictionaries[lang].remembrancesData.morningRemembrances.length < arabicMorn.length) {
      const existingIds = new Set(dictionaries[lang].remembrancesData.morningRemembrances.map(r => r.id));
      for (const remembrance of arabicMorn) {
        if (!existingIds.has(remembrance.id)) {
           dictionaries[lang].remembrancesData.morningRemembrances.push({
             ...remembrance,
             translation: 'Translation not yet available.',
             virtue: 'Virtue translation not yet available.'
           });
        }
      }
    }
    if (dictionaries[lang].remembrancesData.eveningRemembrances.length < arabicEven.length) {
      const existingIds = new Set(dictionaries[lang].remembrancesData.eveningRemembrances.map(r => r.id));
       for (const remembrance of arabicEven) {
        if (!existingIds.has(remembrance.id)) {
           dictionaries[lang].remembrancesData.eveningRemembrances.push({
             ...remembrance,
             translation: 'Translation not yet available.',
             virtue: 'Virtue translation not yet available.'
           });
        }
      }
    }
  }
};

addPlaceholders(['tr', 'id', 'fr']);


export type Locale = keyof typeof dictionaries;

export const getDictionary = (locale: Locale) => dictionaries[locale];
