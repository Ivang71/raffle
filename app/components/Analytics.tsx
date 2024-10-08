import Script from "next/script"

export const Analytics = () => (
    <>
         {/* Microsoft Clarity */}
        <Script
            id="microsoft-clarity-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
                __html: `
                    (function(c,l,a,r,i,t,y){
                        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                    })(window, document, "clarity", "script", "o1m6keyl7c");
                `,
            }}
        />
        <> {/* Google Analytics */}
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=G-4JEBT7XY8K`}
            />
            <Script
                id="google-analytics-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-4JEBT7XY8K');
                    `,
                }}
            />
        </>
    </>
)
