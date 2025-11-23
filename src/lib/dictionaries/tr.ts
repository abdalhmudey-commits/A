const dictionary = {
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
      notifications: "Bildirimler",
      notificationsEnabled: "Bildirimler başarıyla etkinleştirildi!",
      notificationsDisabled: "Bildirimler devre dışı bırakıldı.",
      notificationsDenied: "Bildirim izni reddedildi. Lütfen tarayıcı ayarlarınızdan etkinleştirin.",
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
      enableNotificationsFirst: "Lütfen önce ayarlardan bildirimleri etkinleştirin.",
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
    onboarding: {
        welcomeTitle: "Değişim Yolculuğuna Hoş Geldiniz!",
        welcomeAdPlaceholder: "Hoş Geldiniz Reklamı İçin Yer Tutucu",
        next: "İleri",
        back: "Geri",
        finish: "Bitir",
        habitDescriptionTitle: "Hangi alışkanlığı bırakmak istiyorsunuz?",
        habitDescriptionSubtitle: "Odaklanmanıza yardımcı olması için alışkanlığı açıkça tanımlayın.",
        reminderFrequencyTitle: "Size ne zaman hatırlatalım?",
        reminderFrequencySubtitle: "Güçlü kalmanıza yardımcı olacak bildirimleri almak için uygun bir zaman seçin.",
        reminderMessageTitle: "Motivasyon Mesajınız",
        reminderMessageSubtitle: "Kendinize güçlü ve teşvik edici bir mesaj yazın.",
        audioReminderTitle: "Mesajınıza Ses Ekleyin",
        audioReminderSubtitle: "Hatırlatıcınızı daha etkili hale getirmek için bir sesli mesaj kaydedebilir veya bir ses dosyası yükleyebilirsiniz.",
        finalStepTitle: "Artık Hazırsınız!",
        finalStepSubtitle: "İlk alışkanlığınızı başarıyla kurdunuz. Yolculuğunuzda size en iyi dileklerimizi sunarız.",
    },
    ads: {
        bannerPlaceholder: "Banner Reklamı İçin Yer Tutucu"
    },
    remembrancesData: {
      morningRemembrances: [
        {
            id: 1,
            arabicText: 'أَعُوذُ بِاللهِ مِنْ الشَّيْطَانِ الرَّجِيمِ\nاللّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْfَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ. [آية الكرسى - البقرة 255]',
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
        },
        {
            id: 3,
            arabicText: 'أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذَا الْيَوْمِ وَخَيْرَ مَا بَعْدَهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذَا الْيَوْمِ وَشَرِّ مَا بَعْدَهُ، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ.',
            translation: 'Sabaha ulaştık ve mülk de Allah\'a ulaşmıştır. Hamd Allah\'adır. Allah\'tan başka ilah yoktur, O tektir, ortağı yoktur. Mülk O\'nundur, hamd O\'nadır ve O her şeye kadirdir. Rabbim, bu günün ve sonrasının hayrını Senden dilerim. Bu günün ve sonrasının şerrinden Sana sığınırım. Rabbim, tembellikten ve yaşlılığın kötülüğünden Sana sığınırım. Rabbim, cehennem azabından ve kabir azabından Sana sığınırım.',
            count: 1,
            virtue: ''
        },
        {
            id: 4,
            arabicText: 'اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ وَإِلَيْكَ النُّشُورُ.',
            translation: 'Allah\'ım, Seninle sabaha ulaştık, Seninle akşama ulaştık. Seninle yaşar, Seninle ölürüz ve dönüş Sanadır.',
            count: 1,
            virtue: ''
        },
        {
            id: 5,
            arabicText: 'اللَّهُمَّ أَنْتَ رَبِّي لاَ إِلَهَ إِلاَّ أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لاَ يَغْfِرُ الذُّنُوبَ إِلاَّ أَنْتَ.',
            translation: 'Allah\'ım, Sen benim Rabbimsin. Senden başka ilah yoktur. Beni Sen yarattın ve ben Senin kulunum. Gücüm yettiğince Sana verdiğim söz ve vaad üzereyim. Yaptıklarımın şerrinden Sana sığınırım. Bana olan nimetini itiraf ederim, günahımı da itiraf ederim. Beni bağışla, çünkü günahları Senden başkası bağışlayamaz.',
            count: 1,
            virtue: 'Kim bunu sabahleyin inanarak söyler ve o gün ölürse cennete girer. Kim de akşamleyin inanarak söyler ve o gece ölürse cennete girer.'
        },
        {
            id: 6,
            arabicText: 'اللَّهُمَّ إِنِّي أَصْبَحْتُ أُشْهِدُكَ، وَأُشْهِدُ حَمَلَةَ عَرْشِكَ، وَمَلاَئِكَتَكَ، وَجَمِيعَ خَلْقِكَ، أَنَّكَ أَنْتَ اللَّهُ لاَ إِلَهَ إِلاَّ أَنْتَ وَحْدَكَ لاَ شَرِيكَ لَكَ، وَأَنَّ مُحَمَّداً عَبْدُكَ وَرَسُولُكَ.',
            translation: 'Allah\'ım, sabaha ulaştım ve Seni, Arşının taşıyıcılarını, meleklerini ve bütün yaratılmışlarını şahit tutarım ki, Sen, kendisinden başka ilah olmayan, tek ve ortağı bulunmayan Allah\'sın ve Muhammed Senin kulun ve elçindir.',
            count: 4,
            virtue: 'Kim bunu sabah veya akşam dört defa söylerse, Allah onu cehennem ateşinden azat eder.'
        },
        {
            id: 7,
            arabicText: 'اللَّهُمَّ مَا أَصْبَحَ بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ فَمِنْكَ وَحْدَكَ لاَ شَرِيكَ لَكَ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ.',
            translation: 'Allah\'ım, bu sabah bana veya yarattıklarından herhangi birine ulaşan her nimet, Senden yalnızdır, Senin ortağın yoktur. Hamd Sana, şükür Sanadır.',
            count: 1,
            virtue: 'Kim bunu sabah söylerse gününün şükrünü eda etmiş olur. Kim de akşam söylerse gecesinin şükrünü eda etmiş olur.'
        },
        {
            id: 8,
            arabicText: 'اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لاَ إِلَهَ إِلاَّ أَنْتَ. اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُfْرِ، وَالْفَقْرِ، وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، لاَ إِلَهَ إِلاَّ أَنْتَ.',
            translation: 'Allah\'ım, bedenime afiyet ver. Allah\'ım, kulağıma afiyet ver. Allah\'ım, gözüme afiyet ver. Senden başka ilah yoktur. Allah\'ım, küfürden ve fakirlikten Sana sığınırım. Kabir azabından Sana sığınırım. Senden başka ilah yoktur.',
            count: 3,
            virtue: ''
        },
        {
            id: 9,
            arabicText: 'حَسْبِيَ اللَّهُ لاَ إِلَهَ إِلاَّ هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ.',
            translation: 'Allah bana yeter. O\'ndan başka ilah yoktur. O\'na tevekkül ettim ve O, büyük Arş\'ın Rabbidir.',
            count: 7,
            virtue: 'Kim bunu sabah ve akşam yedi defa söylerse, Allah ona dünya ve ahiret işlerinde yeterli gelir.'
        },
        {
            id: 10,
            arabicText: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالآخِرَةِ، اللَّهُمَّ إِنِّي أَsْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ: فِي دِينِي وَدُنْيَايَ وَأَهْلِي، وَمَالِي، اللَّهُمَّ اسْتُرْ عَوْرَاتِي، وَآمِنْ رَوْعَاتِي، اللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ، وَمِنْ خَلْfِي، وَعَنْ يَمِينِي، وَعَنْ شِمَالِي، وَمِنْ fَوْقِي، وَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي.',
            translation: 'Allah\'ım, Senden dünyada ve ahirette af ve afiyet dilerim. Allah\'ım, Senden dinim, dünyam, ailem ve malım için af ve afiyet dilerim. Allah\'ım, ayıplarımı ört ve korkularımı gider. Allah\'ım, beni önümden, arkamdan, sağımdan, solumdan ve üstümden koru. Altımdan helak edilmekten Senin azametine sığınırım.',
            count: 1,
            virtue: ''
        },
        {
            id: 11,
            arabicText: 'اللَّهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ فَاطِرَ السَّمَاوَاتِ وَالأَرْضِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيكَهُ، أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ أَنْتَ، أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي، وَمِنْ شَرِّ الشَّيْطَانِ وَشِرْكِهِ، وَأَنْ أَقْتَرِفَ عَلَى نَفْسِي سُوءاً، أَوْ أَجُرَّهُ إِلَى مُسْلِمٍ.',
            translation: 'Ey gaybı ve görüneni bilen, gökleri ve yeri yaratan, her şeyin Rabbi ve Sahibi olan Allah\'ım! Senden başka ilah olmadığına şehadet ederim. Nefsimin şerrinden, şeytanın ve onun ortak koşmasının şerrinden, kendime bir kötülük yapmaktan veya onu bir Müslümana bulaştırmaktan Sana sığınırım.',
            count: 1,
            virtue: ''
        },
        {
            id: 12,
            arabicText: 'بِسْمِ اللَّهِ الَّذِي لاَ يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الأَرْضِ وَلاَ فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ.',
            translation: 'Adıyla yerde ve gökte hiçbir şeyin zarar veremeyeceği Allah\'ın adıyla. O, her şeyi işitendir, her şeyi bilendir.',
            count: 3,
            virtue: 'Kim bunu sabah ve akşam üçer defa söylerse, hiçbir şey ona zarar vermez.'
        },
        {
            id: 13,
            arabicText: 'رَضِيتُ بِاللَّهِ رَبَّاً، وَبِالإِسْلاَمِ دِيناً، وَبِمُحَمَّدٍ صلى الله عليه وسلم نَبِيّاً.',
            translation: 'Rab olarak Allah\'tan, din olarak İslam\'dan ve peygamber olarak Muhammed\'den (sallallahu aleyhi ve sellem) razı oldum.',
            count: 3,
            virtue: 'Kim bunu sabah ve akşam üçer defa söylerse, kıyamet gününde Allah\'ın onu razı etmesi üzerine bir hak olur.'
        },
        {
            id: 14,
            arabicText: 'يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ أَصْلِحْ لِي شَأْنِي كُلَّهُ وَلاَ تَكِلْنِي إِلَى نَفْسِي طَرْfَةَ عَيْنٍ.',
            translation: 'Ey Hayy ve Kayyum olan! Rahmetinle yardım dilerim. Bütün işlerimi düzelt ve beni göz açıp kapayıncaya kadar bile nefsime bırakma.',
            count: 3,
            virtue: ''
        },
        {
            id: 15,
            arabicText: 'أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ رَبِّ الْعَالَمِينَ، اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذَا الْيَوْmِ: فَتْحَهُ، وَنَصْرَهُ، وَنُورَهُ، وَبَرَكَتَهُ، وَهُدَاهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِيهِ وَشَرِّ مَا بَعْدَهُ.',
            translation: 'Sabaha ulaştık ve mülk, âlemlerin Rabbi olan Allah\'ındır. Allah\'ım, Senden bu günün hayrını, fethini, yardımını, nurunu, bereketini ve hidayetini dilerim. İçindeki şerden ve sonrasındaki şerden Sana sığınırım.',
            count: 1,
            virtue: ''
        },
        {
            id: 16,
            arabicText: 'أَصْبَحْna عَلَى فِطْرَةِ الإسْلاَمِ، وَعَلَى كَلِمَةِ الإِخْلاَصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّdٍ صلى الله عليه وسلم، وَعَلَى مِلَّةِ أَبِينَا إبْرَاهِيمَ، حَنِيفاً مُسْلِماً وَمَا كَانَ مِنَ الْمُشْرِكِينَ.',
            translation: 'İslam fıtratı, ihlas kelimesi, Peygamberimiz Muhammed\'in (sallallahu aleyhi ve sellem) dini ve babamız İbrahim\'in (hanif ve Müslüman olarak) dini üzere sabaha ulaştık. O, müşriklerden değildi.',
            count: 1,
            virtue: ''
        },
        {
            id: 17,
            arabicText: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ.',
            translation: 'Allah\'a hamd ederek O\'nu noksan sıfatlardan tenzih ederim.',
            count: 100,
            virtue: 'Kim bunu sabah ve akşam yüz defa söylerse, kıyamet gününde ondan daha fazlasını söyleyen veya aynısını söyleyen hariç kimse ondan daha iyi bir şeyle gelemez.'
        },
        {
            id: 18,
            arabicText: 'لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.',
            translation: 'Allah\'tan başka ilah yoktur, O tektir, ortağı yoktur. Mülk O\'nundur, hamd O\'nadır ve O her şeye kadirdir.',
            count: 10,
            virtue: 'Kim bunu on defa söylerse, on köle azat etmiş gibi olur, ona yüz hasene yazılır, ondan yüz günah silinir ve o gün akşama kadar şeytandan korunmuş olur. Ondan daha fazla yapan hariç kimse ondan daha iyi bir şeyle gelemez.'
        },
        {
            id: 19,
            arabicText: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ: عَدَدَ خَلْقِهِ، وَرِضَا نَفْسِهِ، وَزِنَةَ عَرْشِهِ، وَمِدَادَ كَلِمَاتِهِ.',
            translation: 'Yaratıklarının sayısı, rızası, Arşının ağırlığı ve kelimelerinin mürekkebi kadar Allah\'ı hamd ile tesbih ederim.',
            count: 3,
            virtue: ''
        },
        {
            id: 20,
            arabicText: 'اللَّهُمَّ إِنِّي أَsْأَلُكَ عِلْماً نَافِعاً، وَرِزْقاً طَيِّباً، وَعَمَلاً مُتَقَبَّلاً.',
            translation: 'Allah\'ım, Senden faydalı ilim, helal rızık ve kabul edilmiş amel dilerim.',
            count: 1,
            virtue: ''
        },
        {
            id: 21,
            arabicText: 'أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ.',
            translation: 'Allah\'tan bağışlanma diler ve O\'na tövbe ederim.',
            count: 100,
            virtue: ''
        },
        {
            id: 22,
            arabicText: 'اللَّهُمَّ صَلِّ وَسَلِّdْ عَلَى نَبَيِّنَا مُحَمَّدٍ.',
            translation: 'Allah\'ım, Peygamberimiz Muhammed\'e salât ve selam eyle.',
            count: 10,
            virtue: 'Kim bana sabah on, akşam on defa salât getirirse, kıyamet gününde şefaatim ona ulaşır.'
        }
      ],
      eveningRemembrances: [
        {
            id: 1,
            arabicText: 'أَعُوذُ بِاللهِ مِنْ الشَّيْطَانِ الرَّجِيمِ\nاللّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْfَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْfَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِfْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ. [آية الكرسى - البقرة 255]',
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
        },
        {
            id: 3,
            arabicText: 'أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذِهِ اللَّيْلَةِ وَخَيْرَ مَا بَعْدَهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذِهِ اللَّيْلَةِ وَشَرِّ مَا بَعْدَهَا، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ.',
            translation: 'Akşama ulaştık ve mülk de Allah\'a ulaşmıştır. Hamd Allah\'adır. Allah\'tan başka ilah yoktur, O tektir, ortağı yoktur. Mülk O\'nundur, hamd O\'nadır ve O her şeye kadirdir. Rabbim, bu gecenin ve sonrasının hayrını Senden dilerim. Bu gecenin ve sonrasının şerrinden Sana sığınırım. Rabbim, tembellikten ve yaşlılığın kötülüğünden Sana sığınırım. Rabbim, cehennem azabından ve kabir azabından Sana sığınırım.',
            count: 1,
            virtue: ''
        },
        {
            id: 4,
            arabicText: 'اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ وَإِلَيْكَ الْمَصِيرُ.',
            translation: 'Allah\'ım, Seninle akşama ulaştık, Seninle sabaha ulaştık. Seninle yaşar, Seninle ölürüz ve dönüş Sanadır.',
            count: 1,
            virtue: ''
        },
        {
            id: 5,
            arabicText: 'اللَّهُمَّ أَنْتَ رَبِّي لاَ إِلَهَ إِلاَّ أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْfِرْ لِي فَإِنَّهُ لاَ يَغْfِرُ الذُّنُوبَ إِلاَّ أَنْتَ.',
            translation: 'Allah\'ım, Sen benim Rabbimsin. Senden başka ilah yoktur. Beni Sen yarattın ve ben Senin kulunum. Gücüm yettiğince Sana verdiğim söz ve vaad üzereyim. Yaptıklarımın şerrinden Sana sığınırım. Bana olan nimetini itiraf ederim, günahımı da itiraf ederim. Beni bağışla, çünkü günahları Senden başkası bağışlayamaz.',
            count: 1,
            virtue: 'Kim bunu akşamleyin inanarak söyler ve o gece ölürse cennete girer. Kim de sabahleyin inanarak söyler ve o gün ölürse cennete girer.'
        },
        {
            id: 6,
            arabicText: 'اللَّهُمَّ إِنِّي أَمْسَيْتُ أُشْهِدُكَ، وَأُشْهِدُ حَمَلَةَ عَرْشِكَ، وَمَلاَئِكَتَكَ، وَجَمِيعَ خَلْقِكَ، أَنَّكَ أَنْتَ اللَّهُ لاَ إِلَهَ إِلاَّ أَنْتَ وَحْدَكَ لاَ شَرِيكَ لَكَ، وَأَنَّ مُحَمَّداً عَبْدُكَ وَرَسُولُكَ.',
            translation: 'Allah\'ım, akşama ulaştım ve Seni, Arşının taşıyıcılarını, meleklerini ve bütün yaratılmışlarını şahit tutarım ki, Sen, kendisinden başka ilah olmayan, tek ve ortağı bulunmayan Allah\'sın ve Muhammed Senin kulun ve elçindir.',
            count: 4,
            virtue: 'Kim bunu akşam veya sabah dört defa söylerse, Allah onu cehennem ateşinden azat eder.'
        },
        {
            id: 7,
            arabicText: 'اللَّهُمَّ مَا أَمْسَى بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ فَمِنْكَ وَحْدَكَ لاَ شَرِيكَ لَكَ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ.',
            translation: 'Allah\'ım, bu akşam bana veya yarattıklarından herhangi birine ulaşan her nimet, Senden yalnızdır, Senin ortağın yoktur. Hamd Sana, şükür Sanadır.',
            count: 1,
            virtue: 'Kim bunu akşam söylerse gecesinin şükrünü eda etmiş olur. Kim de sabah söylerse gününün şükrünü eda etmiş olur.'
        },
        {
            id: 8,
            arabicText: 'اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لاَ إِلَهَ إِلاَّ أَنْتَ. اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُfْرِ، وَالْfَقْرِ، وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، لاَ إِلَهَ إِلاَّ أَنْتَ.',
            translation: 'Allah\'ım, bedenime afiyet ver. Allah\'ım, kulağıma afiyet ver. Allah\'ım, gözüme afiyet ver. Senden başka ilah yoktur. Allah\'ım, küfürden ve fakirlikten Sana sığınırım. Kabir azabından Sana sığınırım. Senden başka ilah yoktur.',
            count: 3,
            virtue: ''
        },
        {
            id: 9,
            arabicText: 'حَسْبِيَ اللَّهُ لاَ إِلَهَ إِلاَّ هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ.',
            translation: 'Allah bana yeter. O\'ndan başka ilah yoktur. O\'na tevekkül ettim ve O, büyük Arş\'ın Rabbidir.',
            count: 7,
            virtue: 'Kim bunu akşam ve sabah yedi defa söylerse, Allah ona dünya ve ahiret işlerinde yeterli gelir.'
        },
        {
            id: 10,
            arabicText: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالآخِرَةِ، اللَّهُمَّ إِنِّي أَsْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ: فِي دِينِي وَدُنْيَايَ وَأَهْلِي، وَمَالِي، اللَّهُمَّ اسْتُرْ عَوْرَاتِي، وَآمِنْ رَوْعَاتِي، اللَّهُمَّ احْfَظْنِي مِنْ بَيْنِ يَدَيَّ، وَمِنْ خَلْfِي، وَعَنْ يَمِينِي، وَعَنْ شِمَالِي، وَمِنْ fَوْقِي، وَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي.',
            translation: 'Allah\'ım, Senden dünyada ve ahirette af ve afiyet dilerim. Allah\'ım, Senden dinim, dünyam, ailem ve malım için af ve afiyet dilerim. Allah\'ım, ayıplarımı ört ve korkularımı gider. Allah\'ım, beni önümden, arkamdan, sağımdan, solumdan ve üstümden koru. Altımdan helak edilmekten Senin azametine sığınırım.',
            count: 1,
            virtue: ''
        },
        {
            id: 11,
            arabicText: 'اللَّهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ فَاطِرَ السَّمَاوَاتِ وَالأَرْضِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيكَهُ، أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ أَنْتَ، أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي، وَمِنْ شَرِّ الشَّيْطَانِ وَشِرْكِهِ، وَأَنْ أَقْتَرِفَ عَلَى نَفْسِي سُوءاً، أَوْ أَجُرَّهُ إِلَى مُسْلِمٍ.',
            translation: 'Ey gaybı ve görüneni bilen, gökleri ve yeri yaratan, her şeyin Rabbi ve Sahibi olan Allah\'ım! Senden başka ilah olmadığına şehadet ederim. Nefsimin şerrinden, şeytanın ve onun ortak koşmasının şerrinden, kendime bir kötülük yapmaktan veya onu bir Müslümana bulaştırmaktan Sana sığınırım.',
            count: 1,
            virtue: ''
        },
        {
            id: 12,
            arabicText: 'بِسْمِ اللَّهِ الَّذِي لاَ يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الأَرْضِ وَلاَ فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ.',
            translation: 'Adıyla yerde ve gökte hiçbir şeyin zarar veremeyeceği Allah\'ın adıyla. O, her şeyi işitendir, her şeyi bilendir.',
            count: 3,
            virtue: 'Kim bunu akşam ve sabah üçer defa söylerse, hiçbir şey ona zarar vermez.'
        },
        {
            id: 13,
            arabicText: 'رَضِيتُ بِاللَّهِ رَبَّاً، وَبِالإِسْلاَمِ دِيناً، وَبِمُحَمَّدٍ صلى الله عليه وسلم نَبِيّاً.',
            translation: 'Rab olarak Allah\'tan, din olarak İslam\'dan ve peygamber olarak Muhammed\'den (sallallahu aleyhi ve sellem) razı oldum.',
            count: 3,
            virtue: 'Kim bunu akşam ve sabah üçer defa söylerse, kıyamet gününde Allah\'ın onu razı etmesi üzerine bir hak olur.'
        },
        {
            id: 14,
            arabicText: 'يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ أَصْلِحْ لِي شَأْنِي كُلَّهُ وَلاَ تَكِلْنِي إِلَى نَفْسِي طَرْfَةَ عَيْنٍ.',
            translation: 'Ey Hayy ve Kayyum olan! Rahmetinle yardım dilerim. Bütün işlerimi düzelt ve beni göz açıp kapayıncaya kadar bile nefsime bırakma.',
            count: 1,
            virtue: ''
        },
        {
            id: 15,
            arabicText: 'أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ رَبِّ الْعَالَمِينَ، اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذِهِ اللَّيْلَةِ: فَتْحَهَا، وَنَصْرَهَا، وَنُورَهَا، وَبَرَكَتَهَا، وَهُدَاهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِيهَا وَشَرِّ مَا بَعْدَهَا.',
            translation: 'Akşama ulaştık ve mülk, âlemlerin Rabbi olan Allah\'ındır. Allah\'ım, Senden bu gecenin hayrını, fethini, yardımını, nurunu, bereketini ve hidayetini dilerim. İçindeki şerden ve sonrasındaki şerden Sana sığınırım.',
            count: 1,
            virtue: ''
        },
        {
            id: 16,
            arabicText: 'أَمْسَيْna عَلَى فِطْرَةِ الإسْلاَمِ، وَعَلَى كَلِمَةِ الإِخْلاَصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّdٍ صلى الله عليه وسلم، وَعَلَى مِلَّةِ أَبِينَا إبْرَاهِيمَ، حَنِيفاً مُسْلِماً وَمَا كَانَ مِنَ الْمُشْرِكِينَ.',
            translation: 'İslam fıtratı, ihlas kelimesi, Peygamberimiz Muhammed\'in (sallallahu aleyhi ve sellem) dini ve babamız İbrahim\'in (hanif ve Müslüman olarak) dini üzere akşama ulaştık. O, müşriklerden değildi.',
            count: 1,
            virtue: ''
        },
        {
            id: 17,
            arabicText: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ.',
            translation: 'Allah\'a hamd ederek O\'nu noksan sıfatlardan tenzih ederim.',
            count: 100,
            virtue: 'Kim bunu akşam ve sabah yüz defa söylerse, kıyamet gününde ondan daha fazlasını söyleyen veya aynısını söyleyen hariç kimse ondan daha iyi bir şeyle gelemez.'
        },
        {
            id: 18,
            arabicText: 'لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.',
            translation: 'Allah\'tan başka ilah yoktur, O tektir, ortağı yoktur. Mülk O\'nundur, hamd O\'nadır ve O her şeye kadirdir.',
            count: 10,
            virtue: 'Kim bunu on defa söylerse, on köle azat etmiş gibi olur, ona yüz hasene yazılır, ondan yüz günah silinir ve o gece sabaha kadar şeytandan korunmuş olur. Ondan daha fazla yapan hariç kimse ondan daha iyi bir şeyle gelemez.'
        },
        {
            id: 19,
            arabicText: 'أَسْتَغْfِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ.',
            translation: 'Allah\'tan bağışlanma diler ve O\'na tövbe ederim.',
            count: 100,
            virtue: ''
        },
        {
            id: 20,
            arabicText: 'أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ.',
            translation: 'Yarattığı şeylerin şerrinden Allah\'ın tam kelimelerine sığınırım.',
            count: 3,
            virtue: 'Kim bunu akşam üç defa söylerse, o gece ona yılan sokması zarar vermez.'
        },
        {
            id: 21,
            arabicText: 'اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبَيِّنَا مُحَمَّdٍ.',
            translation: 'Allah\'ım, Peygamberimiz Muhammed\'e salât ve selam eyle.',
            count: 10,
            virtue: 'Kim bana akşam on, sabah on defa salât getirirse, kıyamet gününde şefaatim ona ulaşır.'
        }
      ]
    }
  };
export default dictionary;
