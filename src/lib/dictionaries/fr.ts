const dictionary = {
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
        },
        {
            id: 3,
            arabicText: 'أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذَا الْيَوْمِ وَخَيْرَ مَا بَعْدَهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذَا الْيَوْمِ وَشَرِّ مَا بَعْدَهُ، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ.',
            translation: 'Nous sommes parvenus au matin et la royauté appartient à Allah. Louange à Allah. Il n\'y a de divinité qu\'Allah, Unique, sans associé. A Lui la royauté, à Lui la louange et Il est puissant sur toute chose. Seigneur, je Te demande le bien de ce jour et le bien qui le suit, et je cherche refuge auprès de Toi contre le mal de ce jour et le mal qui le suit. Seigneur, je cherche refuge auprès de Toi contre la paresse et les maux de la vieillesse. Seigneur, je cherche refuge auprès de Toi contre le châtiment du Feu et le châtiment de la tombe.',
            count: 1,
            virtue: ''
        },
        {
            id: 4,
            arabicText: 'اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ وَإِلَيْكَ النُّشُورُ.',
            translation: 'Ô Allah, par Toi nous nous sommes levés, par Toi nous nous sommes couchés, par Toi nous vivons, par Toi nous mourons et vers Toi est la résurrection.',
            count: 1,
            virtue: ''
        },
        {
            id: 5,
            arabicText: 'اللَّهُمَّ أَنْتَ رَبِّي لاَ إِلَهَ إِلاَّ أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لاَ يَغْفِرُ الذُّنُوبَ إِلاَّ أَنْتَ.',
            translation: 'Ô Allah, Tu es mon Seigneur. Il n\'y a de divinité que Toi. Tu m\'as créé et je suis Ton serviteur. Je suis Ton pacte et Ta promesse autant que je le peux. Je cherche refuge auprès de Toi contre le mal que j\'ai fait. Je reconnais Ta faveur sur moi et je reconnais mon péché, alors pardonne-moi, car nul ne pardonne les péchés sauf Toi.',
            count: 1,
            virtue: 'Quiconque le dit avec certitude le matin et meurt ce jour-là entrera au Paradis, et quiconque le dit avec certitude le soir et meurt cette nuit-là entrera au Paradis.'
        },
        {
            id: 6,
            arabicText: 'اللَّهُمَّ إِنِّي أَصْبَحْتُ أُشْهِدُكَ، وَأُشْهِدُ حَمَلَةَ عَرْشِكَ، وَمَلاَئِكَتَكَ، وَجَمِيعَ خَلْقِكَ، أَنَّكَ أَنْتَ اللَّهُ لاَ إِلَهَ إِلاَّ أَنْتَ وَحْدَكَ لاَ شَرِيكَ لَكَ، وَأَنَّ مُحَمَّداً عَبْدُكَ وَرَسُولُكَ.',
            translation: 'Ô Allah, je suis parvenu au matin et je Te prends à témoin, ainsi que les porteurs de Ton Trône, Tes anges et toute Ta création, que Tu es Allah, il n\'y a de divinité que Toi, Unique, sans associé, et que Muhammad est Ton serviteur et Ton Messager.',
            count: 4,
            virtue: 'Quiconque le dit quatre fois le matin ou le soir, Allah l\'affranchira du Feu.'
        },
        {
            id: 7,
            arabicText: 'اللَّهُمَّ مَا أَصْبَحَ بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ فَمِنْكَ وَحْدَكَ لاَ شَرِيكَ لَكَ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ.',
            translation: 'Ô Allah, quel que soit le bienfait qui m\'atteint ou atteint l\'une de Tes créatures ce matin, il vient de Toi seul, sans associé. A Toi donc la louange et à Toi le remerciement.',
            count: 1,
            virtue: 'Quiconque le dit le matin a accompli le remerciement de sa journée, et quiconque le dit le soir a accompli le remerciement de sa nuit.'
        },
        {
            id: 8,
            arabicText: 'اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لاَ إِلَهَ إِلاَّ أَنْتَ. اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ، وَالْفَقْرِ، وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، لاَ إِلَهَ إِلاَّ أَنْتَ.',
            translation: 'Ô Allah, accorde-moi la santé dans mon corps. Ô Allah, accorde-moi la santé dans mon ouïe. Ô Allah, accorde-moi la santé dans ma vue. Il n\'y a de divinité que Toi. Ô Allah, je cherche refuge auprès de Toi contre l\'incrédulité et la pauvreté, et je cherche refuge auprès de Toi contre le châtiment de la tombe. Il n\'y a de divinité que Toi.',
            count: 3,
            virtue: ''
        },
        {
            id: 9,
            arabicText: 'حَسْبِيَ اللَّهُ لاَ إِلَهَ إِلاَّ هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ.',
            translation: 'Allah me suffit. Il n\'y a de divinité que Lui. En Lui je place ma confiance, et Il est le Seigneur du Trône immense.',
            count: 7,
            virtue: 'Quiconque le dit sept fois le matin et le soir, Allah lui suffira pour ses soucis de ce monde et de l\'au-delà.'
        },
        {
            id: 10,
            arabicText: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالآخِرَةِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ: فِي دِينِي وَدُنْيَايَ وَأَهْلِي، وَمَالِي، اللَّهُمَّ اسْتُرْ عَوْرَاتِي، وَآمِنْ رَوْعَاتِي، اللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ، وَمِنْ خَلْفِي، وَعَنْ يَمِينِي، وَعَنْ شِمَالِي، وَمِنْ فَوْقِي، وَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي.',
            translation: 'Ô Allah, je Te demande le pardon et le bien-être dans cette vie et dans l\'au-delà. Ô Allah, je Te demande le pardon et le bien-être dans ma religion, mes affaires mondaines, ma famille et mes biens. Ô Allah, cache mes défauts et apaise mes craintes. Ô Allah, protège-moi de devant moi, de derrière moi, de ma droite, de ma gauche et d\'au-dessus de moi, et je cherche refuge en Ta grandeur contre le fait d\'être assassiné par-dessous moi.',
            count: 1,
            virtue: ''
        },
        {
            id: 11,
            arabicText: 'اللَّهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ فَاطِرَ السَّمَاوَاتِ وَالأَرْضِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيكَهُ، أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ أَنْتَ، أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي، وَمِنْ شَرِّ الشَّيْطَانِ وَشِرْكِهِ، وَأَنْ أَقْتَرِفَ عَلَى نَفْسِي سُوءاً، أَوْ أَجُرَّهُ إِلَى مُسْلِمٍ.',
            translation: 'Ô Allah, Connaisseur de l\'invisible et du visible, Créateur des cieux et de la terre, Seigneur et Souverain de toute chose, j\'atteste qu\'il n\'y a de divinité que Toi. Je cherche refuge auprès de Toi contre le mal de mon âme, contre le mal de Satan et son polythéisme, et contre le fait de commettre un mal contre moi-même ou de le causer à un musulman.',
            count: 1,
            virtue: ''
        },
        {
            id: 12,
            arabicText: 'بِسْمِ اللَّهِ الَّذِي لاَ يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الأَرْضِ وَلاَ فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ.',
            translation: 'Au nom d\'Allah, dont le nom protège de tout mal sur terre et dans les cieux, et Il est l\'Audient, l\'Omniscient.',
            count: 3,
            virtue: 'Quiconque le dit trois fois le matin et trois fois le soir, rien ne lui nuira.'
        },
        {
            id: 13,
            arabicText: 'رَضِيتُ بِاللَّهِ رَبَّاً، وَبِالإِسْلاَمِ دِيناً، وَبِمُحَمَّدٍ صلى الله عليه وسلم نَبِيّاً.',
            translation: 'Je suis satisfait d\'Allah comme Seigneur, de l\'Islam comme religion et de Muhammad (que la paix soit sur lui) comme Prophète.',
            count: 3,
            virtue: 'Quiconque le dit trois fois le matin et trois fois le soir, il est un droit pour Allah de le satisfaire le Jour de la Résurrection.'
        },
        {
            id: 14,
            arabicText: 'يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ أَصْلِحْ لِي شَأْنِي كُلَّهُ وَلاَ تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ.',
            translation: 'Ô Vivant, ô Subsistant, par Ta miséricorde, je cherche secours. Rectifie pour moi toutes mes affaires et ne me laisse pas à moi-même, ne serait-ce qu\'un clin d\'œil.',
            count: 3,
            virtue: ''
        },
        {
            id: 15,
            arabicText: 'أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ رَبِّ الْعَالَمِينَ، اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذَا الْيَوْمِ: فَتْحَهُ، وَنَصْرَهُ، وَنُورَهُ، وَبَرَكَتَهُ، وَهُدَاهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِيهِ وَشَرِّ مَا بَعْدَهُ.',
            translation: 'Nous sommes parvenus au matin, et la royauté appartient à Allah, Seigneur des mondes. Ô Allah, je Te demande le bien de ce jour : sa victoire, son aide, sa lumière, ses bénédictions et sa guidée. Je cherche refuge auprès de Toi contre le mal qu\'il contient et le mal qui le suit.',
            count: 1,
            virtue: ''
        },
        {
            id: 16,
            arabicText: 'أَصْبَحْنا عَلَى فِطْرَةِ الإسْلاَمِ، وَعَلَى كَلِمَةِ الإِخْلاَصِ، وَعَلَى dِينِ نَبِيِّنَا مُحَمَّدٍ صلى الله عليه وسلم، وَعَلَى مِلَّةِ أَبِينَا إبْرَاهِيمَ، حَنِيفاً مُسْلِماً وَمَا كَانَ مِنَ الْمُشْرِكِينَ.',
            translation: 'Nous nous sommes levés sur la nature innée de l\'Islam, sur la parole de sincérité, sur la religion de notre Prophète Muhammad (que la paix soit sur lui) et sur la croyance de notre père Ibrahim, droit et musulman, et il n\'était pas des polythéistes.',
            count: 1,
            virtue: ''
        },
        {
            id: 17,
            arabicText: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ.',
            translation: 'Gloire et louange à Allah.',
            count: 100,
            virtue: 'Quiconque le dit cent fois le matin et le soir, personne ne viendra au Jour de la Résurrection avec quelque chose de mieux que ce qu\'il a apporté, sauf quelqu\'un qui a dit la même chose ou plus.'
        },
        {
            id: 18,
            arabicText: 'لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.',
            translation: 'Il n\'y a de divinité qu\'Allah, Unique, sans associé. A Lui la royauté, à Lui la louange, et Il est puissant sur toute chose.',
            count: 10,
            virtue: 'Quiconque le dit dix fois, ce sera pour lui l\'équivalent de la libération de dix esclaves, cent bonnes actions lui seront écrites, cent mauvaises actions lui seront effacées, et ce sera une protection pour lui contre Satan ce jour-là jusqu\'au soir, et personne n\'apportera quelque chose de mieux que ce qu\'il a apporté, sauf quelqu\'un qui a fait plus que cela.'
        },
        {
            id: 19,
            arabicText: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ: عَدَدَ خَلْقِهِ، وَرِضَا نَفْسِهِ، وَزِنَةَ عَرْشِهِ، وَمِدَادَ كَلِمَاتِهِ.',
            translation: 'Gloire et louange à Allah, au nombre de Sa création, à la mesure de Sa satisfaction, au poids de Son Trône et à l\'étendue de Ses Paroles.',
            count: 3,
            virtue: ''
        },
        {
            id: 20,
            arabicText: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْماً نَافِعاً، وَرِزْقاً طَيِّباً، وَعَمَلاً مُتَقَبَّلاً.',
            translation: 'Ô Allah, je Te demande une science utile, une bonne subsistance et des œuvres acceptées.',
            count: 1,
            virtue: ''
        },
        {
            id: 21,
            arabicText: 'أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ.',
            translation: 'Je demande pardon à Allah et je me repens à Lui.',
            count: 100,
            virtue: ''
        },
        {
            id: 22,
            arabicText: 'اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبَيِّنَا مُحَمَّدٍ.',
            translation: 'Ô Allah, envoie Tes bénédictions et Ta paix sur notre Prophète Muhammad.',
            count: 10,
            virtue: 'Quiconque envoie des bénédictions sur moi dix fois le matin et dix fois le soir aura mon intercession le Jour de la Résurrection.'
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
        },
        {
            id: 3,
            arabicText: 'أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذِهِ اللَّيْلَةِ وَخَيْرَ مَا بَعْدَهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذِهِ اللَّيْلَةِ وَشَرِّ مَا بَعْدَهَا، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ.',
            translation: 'Nous sommes parvenus au soir et la royauté appartient à Allah. Louange à Allah. Il n\'y a de divinité qu\'Allah, Unique, sans associé. A Lui la royauté, à Lui la louange et Il est puissant sur toute chose. Seigneur, je Te demande le bien de cette nuit et le bien qui la suit, et je cherche refuge auprès de Toi contre le mal de cette nuit et le mal qui la suit. Seigneur, je cherche refuge auprès de Toi contre la paresse et les maux de la vieillesse. Seigneur, je cherche refuge auprès de Toi contre le châtiment du Feu et le châtiment de la tombe.',
            count: 1,
            virtue: ''
        },
        {
            id: 4,
            arabicText: 'اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ وَإِلَيْكَ الْمَصِيرُ.',
            translation: 'Ô Allah, par Toi nous nous sommes couchés, par Toi nous nous sommes levés, par Toi nous vivons, par Toi nous mourons et vers Toi est le retour final.',
            count: 1,
            virtue: ''
        },
        {
            id: 5,
            arabicText: 'اللَّهُمَّ أَنْتَ رَبِّي لاَ إِلَهَ إِلاَّ أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لاَ يَغْfِرُ الذُّنُوبَ إِلاَّ أَنْتَ.',
            translation: 'Ô Allah, Tu es mon Seigneur. Il n\'y a de divinité que Toi. Tu m\'as créé et je suis Ton serviteur. Je suis Ton pacte et Ta promesse autant que je le peux. Je cherche refuge auprès de Toi contre le mal que j\'ai fait. Je reconnais Ta faveur sur moi et je reconnais mon péché, alors pardonne-moi, car nul ne pardonne les péchés sauf Toi.',
            count: 1,
            virtue: 'Quiconque le dit avec certitude le soir et meurt cette nuit-là entrera au Paradis, et quiconque le dit avec certitude le matin et meurt ce jour-là entrera au Paradis.'
        },
        {
            id: 6,
            arabicText: 'اللَّهُمَّ إِنِّي أَمْسَيْتُ أُشْهِدُكَ، وَأُشْهِدُ حَمَلَةَ عَرْشِكَ، وَمَلاَئِكَتَكَ، وَجَمِيعَ خَلْقِكَ، أَنَّكَ أَنْتَ اللَّهُ لاَ إِلَهَ إِلاَّ أَنْتَ وَحْدَكَ لاَ شَرِيكَ لَكَ، وَأَنَّ مُحَمَّداً عَبْدُكَ وَرَسُولُكَ.',
            translation: 'Ô Allah, je suis parvenu au soir et je Te prends à témoin, ainsi que les porteurs de Ton Trône, Tes anges et toute Ta création, que Tu es Allah, il n\'y a de divinité que Toi, Unique, sans associé, et que Muhammad est Ton serviteur et Ton Messager.',
            count: 4,
            virtue: 'Quiconque le dit quatre fois le soir ou le matin, Allah l\'affranchira du Feu.'
        },
        {
            id: 7,
            arabicText: 'اللَّهُمَّ مَا أَمْسَى بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ فَمِنْكَ وَحْدَكَ لاَ شَرِيكَ لَكَ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ.',
            translation: 'Ô Allah, quel que soit le bienfait qui m\'atteint ou atteint l\'une de Tes créatures ce soir, il vient de Toi seul, sans associé. A Toi donc la louange et à Toi le remerciement.',
            count: 1,
            virtue: 'Quiconque le dit le soir a accompli le remerciement de sa nuit, et quiconque le dit le matin a accompli le remerciement de sa journée.'
        },
        {
            id: 8,
            arabicText: 'اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لاَ إِلَهَ إِلاَّ أَنْتَ. اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ، وَالْفَقْرِ، وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، لاَ إِلَهَ إِلاَّ أَنْتَ.',
            translation: 'Ô Allah, accorde-moi la santé dans mon corps. Ô Allah, accorde-moi la santé dans mon ouïe. Ô Allah, accorde-moi la santé dans ma vue. Il n\'y a de divinité que Toi. Ô Allah, je cherche refuge auprès de Toi contre l\'incrédulité et la pauvreté, et je cherche refuge auprès de Toi contre le châtiment de la tombe. Il n\'y a de divinité que Toi.',
            count: 3,
            virtue: ''
        },
        {
            id: 9,
            arabicText: 'حَسْبِيَ اللَّهُ لاَ إِلَهَ إِلاَّ هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ.',
            translation: 'Allah me suffit. Il n\'y a de divinité que Lui. En Lui je place ma confiance, et Il est le Seigneur du Trône immense.',
            count: 7,
            virtue: 'Quiconque le dit sept fois le soir et le matin, Allah lui suffira pour ses soucis de ce monde et de l\'au-delà.'
        },
        {
            id: 10,
            arabicText: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالآخِرَةِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ: فِي دِينِي وَدُنْيَايَ وَأَهْلِي، وَمَالِي، اللَّهُمَّ اسْتُرْ عَوْرَاتِي، وَآمِنْ رَوْعَاتِي، اللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ، وَمِنْ خَلْfِي، وَعَنْ يَمِينِي، وَعَنْ شِمَالِي، وَمِنْ فَوْقِي، وَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي.',
            translation: 'Ô Allah, je Te demande le pardon et le bien-être dans cette vie et dans l\'au-delà. Ô Allah, je Te demande le pardon et le bien-être dans ma religion, mes affaires mondaines, ma famille et mes biens. Ô Allah, cache mes défauts et apaise mes craintes. Ô Allah, protège-moi de devant moi, de derrière moi, de ma droite, de ma gauche et d\'au-dessus de moi, et je cherche refuge en Ta grandeur contre le fait d\'être assassiné par-dessous moi.',
            count: 1,
            virtue: ''
        },
        {
            id: 11,
            arabicText: 'اللَّهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ فَاطِرَ السَّمَاوَاتِ وَالأَرْضِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيكَهُ، أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ أَنْتَ، أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي، وَمِنْ شَرِّ الشَّيْطَانِ وَشِرْكِهِ، وَأَنْ أَقْتَرِفَ عَلَى نَفْسِي سُوءاً، أَوْ أَجُرَّهُ إِلَى مُسْلِمٍ.',
            translation: 'Ô Allah, Connaisseur de l\'invisible et du visible, Créateur des cieux et de la terre, Seigneur et Souverain de toute chose, j\'atteste qu\'il n\'y a de divinité que Toi. Je cherche refuge auprès de Toi contre le mal de mon âme, contre le mal de Satan et son polythéisme, et contre le fait de commettre un mal contre moi-même ou de le causer à un musulman.',
            count: 1,
            virtue: ''
        },
        {
            id: 12,
            arabicText: 'بِسْمِ اللَّهِ الَّذِي لاَ يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الأَرْضِ وَلاَ فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ.',
            translation: 'Au nom d\'Allah, dont le nom protège de tout mal sur terre et dans les cieux, et Il est l\'Audient, l\'Omniscient.',
            count: 3,
            virtue: 'Quiconque le dit trois fois le soir et trois fois le matin, rien ne lui nuira.'
        },
        {
            id: 13,
            arabicText: 'رَضِيتُ بِاللَّهِ رَبَّاً، وَبِالإِسْلاَمِ دِيناً، وَبِمُحَمَّدٍ صلى الله عليه وسلم نَبِيّاً.',
            translation: 'Je suis satisfait d\'Allah comme Seigneur, de l\'Islam comme religion et de Muhammad (que la paix soit sur lui) comme Prophète.',
            count: 3,
            virtue: 'Quiconque le dit trois fois le soir et trois fois le matin, il est un droit pour Allah de le satisfaire le Jour de la Résurrection.'
        },
        {
            id: 14,
            arabicText: 'يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ أَصْلِحْ لِي شَأْنِي كُلَّهُ وَلاَ تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ.',
            translation: 'Ô Vivant, ô Subsistant, par Ta miséricorde, je cherche secours. Rectifie pour moi toutes mes affaires et ne me laisse pas à moi-même, ne serait-ce qu\'un clin d\'œil.',
            count: 1,
            virtue: ''
        },
        {
            id: 15,
            arabicText: 'أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ رَبِّ الْعَالَمِينَ، اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذِهِ اللَّيْلَةِ: فَتْحَهَا، وَنَصْرَهَا، وَنُورَهَا، وَبَرَكَتَهَا، وَهُدَاهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِيهَا وَشَرِّ مَا بَعْدَهَا.',
            translation: 'Nous sommes parvenus au soir, et la royauté appartient à Allah, Seigneur des mondes. Ô Allah, je Te demande le bien de cette nuit : sa victoire, son aide, sa lumière, ses bénédictions et sa guidée. Je cherche refuge auprès de Toi contre le mal qu\'elle contient et le mal qui la suit.',
            count: 1,
            virtue: ''
        },
        {
            id: 16,
            arabicText: 'أَمْسَيْنا عَلَى فِطْرَةِ الإسْلاَمِ، وَعَلَى كَلِمَةِ الإِخْلاَصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ صلى الله عليه وسلم، وَعَلَى مِلَّةِ أَبِينَا إبْرَاهِيمَ، حَنِيفاً مُسْلِماً وَمَا كَانَ مِنَ الْمُشْرِكِينَ.',
            translation: 'Nous nous sommes couchés sur la nature innée de l\'Islam, sur la parole de sincérité, sur la religion de notre Prophète Muhammad (que la paix soit sur lui) et sur la croyance de notre père Ibrahim, droit et musulman, et il n\'était pas des polythéistes.',
            count: 1,
            virtue: ''
        },
        {
            id: 17,
            arabicText: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ.',
            translation: 'Gloire et louange à Allah.',
            count: 100,
            virtue: 'Quiconque le dit cent fois le soir et le matin, personne ne viendra au Jour de la Résurrection avec quelque chose de mieux que ce qu\'il a apporté, sauf quelqu\'un qui a dit la même chose ou plus.'
        },
        {
            id: 18,
            arabicText: 'لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.',
            translation: 'Il n\'y a de divinité qu\'Allah, Unique, sans associé. A Lui la royauté, à Lui la louange, et Il est puissant sur toute chose.',
            count: 10,
            virtue: 'Quiconque le dit dix fois, ce sera pour lui l\'équivalent de la libération de dix esclaves, cent bonnes actions lui seront écrites, cent mauvaises actions lui seront effacées, et ce sera une protection pour lui contre Satan cette nuit-là jusqu\'au matin, et personne n\'apportera quelque chose de mieux que ce qu\'il a apporté, sauf quelqu\'un qui a fait plus que cela.'
        },
        {
            id: 19,
            arabicText: 'أَسْتَغْfِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ.',
            translation: 'Je demande pardon à Allah et je me repens à Lui.',
            count: 100,
            virtue: ''
        },
        {
            id: 20,
            arabicText: 'أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ.',
            translation: 'Je cherche refuge dans les paroles parfaites d\'Allah contre le mal de ce qu\'Il a créé.',
            count: 3,
            virtue: 'Quiconque le dit trois fois le soir ne sera pas blessé par la piqûre d\'un serpent cette nuit-là.'
        },
        {
            id: 21,
            arabicText: 'اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبَيِّنَا مُحَمَّدٍ.',
            translation: 'Ô Allah, envoie Tes bénédictions et Ta paix sur notre Prophète Muhammad.',
            count: 10,
            virtue: 'Quiconque envoie des bénédictions sur moi dix fois le soir et dix fois le matin aura mon intercession le Jour de la Résurrection.'
        }
      ]
    }
  };
export default dictionary;
