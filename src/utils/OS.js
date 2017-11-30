export default class OS
{
    //--------------------------------------------------------------------------
    //
    //    OS 체크
    //
    //--------------------------------------------------------------------------

    /**
     * Phaser.Device 코드
     * http://phaser.io/docs/2.4.2/Phaser.Device.html
     */
    static checkOS()
    {
        if (!this.isChecked) {
            this._desktop = false;

            var ua = navigator.userAgent;

            if (/Playstation Vita/.test(ua)) {
                this._vita = true;
            }
            else if (/Kindle/.test(ua) || /\bKF[A-Z][A-Z]+/.test(ua) || /Silk.*Mobile Safari/.test(ua)) {
                this._kindle = true;
                // This will NOT detect early generations of Kindle Fire, I think there is no reliable way...
                // E.g. "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_3; en-us; Silk/1.1.0-80) AppleWebKit/533.16 (KHTML, like Gecko) Version/5.0 Safari/533.16 Silk-Accelerated=true"
            }
            else if (/Android/.test(ua)) {
                this._android = true;
            }
            else if (/CrOS/.test(ua)) {
                this._chromeOS = true;
            }
            else if (/iP[ao]d|iPhone/i.test(ua)) {
                this._iOS = true;
                (navigator.appVersion).match(/OS (\d+)/);
                this._iOSVersion = parseInt(RegExp.$1, 10);
            }
            else if (/Linux/.test(ua)) {
                this._linux = true;
            }
            else if (/Mac OS/.test(ua)) {
                this._macOS = true;
            }
            else if (/Windows/.test(ua)) {
                this._windows = true;
            }

            if (/Windows Phone/i.test(ua) || /IEMobile/i.test(ua)) {
                this._android = false;
                this._iOS = false;
                this._macOS = false;
                this._windows = true;
                this._windowsPhone = true;
            }

            var silk = /Silk/.test(ua); // detected in browsers

            if (this._windows || this._macOS || (this._linux && !silk) || this._chromeOS) {
                this._desktop = true;
            }

            //  Windows Phone / Table reset
            if (this._windowsPhone || ((/Windows NT/i.test(ua)) && (/Touch/i.test(ua)))) {
                this._desktop = false;
            }

            this.isChecked = true;
        }

    }

    static get desktop()
    {
        this.checkOS();
        return this._desktop;
    }

    static get android()
    {
        this.checkOS();
        return this._android;
    }

    static get chromeOS()
    {
        this.checkOS();
        return this._chromeOS;
    }

    static get iOS()
    {
        this.checkOS();
        return this._iOS;
    }

    static get linux()
    {
        this.checkOS();
        return this._linux;
    }

    static get macOS()
    {
        this.checkOS();
        return this._macOS;
    }

    static get windows()
    {
        this.checkOS();
        return this._windows;
    }

    static get windowsPhone()
    {
        this.checkOS();
        return this._windowsPhone;
    }

    static get vita()
    {
        this.checkOS();
        return this._vita;
    }

    static get kindle()
    {
        this.checkOS();
        return this._kindle;
    }
}