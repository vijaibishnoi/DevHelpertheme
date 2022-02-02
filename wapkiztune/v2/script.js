    const audioTag = document.getElementById('mainAudio');
    const languageSelector = document.getElementById("language-picker-select");
    if (languageSelector){
        languageSelector.addEventListener('change',function (e){
            const meta =  document.querySelector('[hreflang="'+e.target.value+'"]');
            if(meta){
                window.location.href = meta.getAttribute('href');
            }else{
                if (e.target.value.toLowerCase() == 'en'){
                    window.location.href = '/';
                }else{
                    window.location.href = '/'+e.target.value+'/';
                }

            }
        });
    }


    function toggleSideMenu()
    {
        document.body.classList.toggle('showing');
        toggleBackdrop();
    }
    function toggleBackdrop(){
        const backdrop =  document.querySelector('.modal-backdrop');
        if(backdrop){
            backdrop.remove();
            return;
        }

        const overlay =  document.createElement('div');
        overlay.classList.add('modal-backdrop', 'fade', 'show','menu-backdrop');
        document.body.appendChild(overlay);
    }

    document.addEventListener('click',function(e) {
        if (e.target && e.target.classList.contains('modal-backdrop')) {
            if (document.body.classList.contains('showing')) {
                toggleSideMenu();
            }

            if (document.body.classList.contains('modal-open')) {
                hideModal();
            }

        }
    });


    function initialiseAudioFunctions () {

        const playBtns = document.querySelectorAll('.play');
        const pauseBtns = document.querySelectorAll('.stop');
        const loader =  document.querySelectorAll('.loader');
        playBtns.forEach(function (btn) {
            btn.addEventListener('click', function () {
                stopPlay();
                const link = btn.getAttribute('data-source');
                audioTag.setAttribute('src', link);
                audioTag.play();
                btn.classList.add('d-none');
                btn.parentElement.querySelector('.loader').classList.remove('d-none')

                audioTag.oncanplay = function (){
                    loader.forEach(function (el){
                        btn.parentElement.querySelector('.pausebutton').classList.remove('d-none')
                        el.classList.add('d-none');
                    })
                }

            })
        });

        pauseBtns.forEach(function (btn) {
            btn.addEventListener('click', function () {
                audioTag.pause();
                btn.previousElementSibling.classList.remove('d-none');
                btn.classList.add('d-none');
            })
        });

        audioTag.onended = function () {
            stopPlay();
        };
    }



    function stopPlay(){
        const active =   document.querySelector('.stop:not(.d-none)');
        if(active){
            active.previousElementSibling.classList.remove('d-none');
            active.classList.add('d-none');
            audioTag.pause();
        }

    }



    function fallbackCopyTextToClipboard(text) {
        var textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.top = "0";
        textArea.style.left = "0";
        textArea.style.position = "fixed";

        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
            document.execCommand('copy');
        } catch (err) {
            console.error('Fallback: Oops, unable to copy', err);
        }

        document.body.removeChild(textArea);
    }

    function copyTextToClipboard(text) {
        if (!navigator.clipboard) {
            fallbackCopyTextToClipboard(text);
            return;
        }
        navigator.clipboard.writeText(text).then(function() {
        }, function(err) {
            console.error('Async: Could not copy text: ', err);
        });
    }

    function showGdpr(){
        const c =  localStorage.getItem('gdpr');
         if (!c){
             document.querySelector('.gdpr').style.display ='block';
         }
    }
    function closeGdpr() {
        localStorage.setItem('gdpr',1);
        document.querySelector('.gdpr').style.display ='none';
    }


    window.onload = ()=>{
        showGdpr();

    };

    const ad = `  `;



    const insObserver = new MutationObserver((mutationList)=>{
        mutationList.forEach(mutation => {
            if (mutation.target.hasAttribute('data-ad-status')){
                const status =  mutation.target.getAttribute('data-ad-status');
                if (status ==='filled') return;

                mutation.target.innerHTML = ad;
            }
        })

    })

    const bodyObserver = new MutationObserver(()=>{
        document.querySelectorAll('ins.adsbygoogle').forEach(el=>{
             insObserver.observe(el,{
                 attributes:true
             })
        })
    });

    bodyObserver.observe(document.body,{
        childList:true,
        subtree:true
    })

    const observer = new IntersectionObserver(function (entries){
        entries.forEach(function (entry){
            if (entry.intersectionRatio > 0){
                const el = entry.target;
                if(el.id ==='bottom'){
                    paginateItems(el);
                }
            }
        })
    });



    const observers = () => {
        if (document.getElementById('bottom')){
            observer.observe(document.getElementById('bottom'));
        }
    }


    const paginateItems = (el) => {
        const container = document.querySelector('.ringtone-container');
        const  nextPageUrl = el.getAttribute('data-next');
        const  lastPage = parseInt(el.getAttribute('data-last'));
        const currentPage =parseInt(el.getAttribute('data-current'));

        if (currentPage !== lastPage){
            fetch(nextPageUrl,{
                headers:{
                    'X-Requested-With': 'XMLHttpRequest'
                }
            }).then(function (res){
                if (res.ok){
                    res.text().then(function (data){
                        container.querySelector('.card:last-child').insertAdjacentHTML('afterend',data);
                        el.setAttribute('data-next',location.href+'?page='+(parseInt(currentPage)+2));
                        el.setAttribute('data-current',parseInt(currentPage)+1);
                        if ((parseInt(currentPage)) == parseInt(lastPage)){
                            el.classList.remove('d-flex');
                            el.classList.add('d-none');
                        }

                        document.querySelectorAll(".adsbygoogle:not([data-ad-status])").forEach(function (){
                            (adsbygoogle = window.adsbygoogle || []).push({});
                        })
                        observers();
                        initialiseAudioFunctions();
                    });
                }
            })
        }else {
            el.classList.remove('d-flex');
            el.classList.add('d-none');
        }
    }


    observers();
    initialiseAudioFunctions();
