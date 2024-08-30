const countries = [
    { name: "UAE", code: "AE", currency: "AED" },
    { name: "AFG", code: "AF", currency: "AFN" },
    { name: "ATG", code: "AG", currency: "XCD" },
    { name: "ALB", code: "AL", currency: "ALL" },
    { name: "ARM", code: "AM", currency: "AMD" },
    { name: "ANT", code: "AN", currency: "ANG" },
    { name: "AGO", code: "AO", currency: "AOA" },
    { name: "ARG", code: "AR", currency: "ARS" },
    { name: "AUS", code: "AU", currency: "AUD" },
    { name: "AZE", code: "AZ", currency: "AZN" },
    { name: "BIH", code: "BA", currency: "BAM" },
    { name: "BRB", code: "BB", currency: "BBD" },
    { name: "BGD", code: "BD", currency: "BDT" },
    { name: "BEL", code: "BE", currency: "EUR" },
    { name: "BGR", code: "BG", currency: "BGN" },
    { name: "BHR", code: "BH", currency: "BHD" },
    { name: "BDI", code: "BI", currency: "BIF" },
    { name: "BMU", code: "BM", currency: "BMD" },
    { name: "BRN", code: "BN", currency: "BND" },
    { name: "BOL", code: "BO", currency: "BOB" },
    { name: "BRA", code: "BR", currency: "BRL" },
    { name: "BHS", code: "BS", currency: "BSD" },
    { name: "BWA", code: "BW", currency: "BWP" },
    { name: "BLR", code: "BY", currency: "BYN" },
    { name: "BLZ", code: "BZ", currency: "BZD" },
    { name: "CAN", code: "CA", currency: "CAD" },
    { name: "COD", code: "CD", currency: "CDF" },
    { name: "CAF", code: "CF", currency: "XAF" },
    { name: "CHE", code: "CH", currency: "CHF" },
    { name: "CHL", code: "CL", currency: "CLP" },
    { name: "CHN", code: "CN", currency: "CNY" },
    { name: "COL", code: "CO", currency: "COP" },
    { name: "CRI", code: "CR", currency: "CRC" },
    { name: "CUB", code: "CU", currency: "CUP" },
    { name: "CPV", code: "CV", currency: "CVE" },
    { name: "CYP", code: "CY", currency: "EUR" },
    { name: "CZE", code: "CZ", currency: "CZK" },
    { name: "DJI", code: "DJ", currency: "DJF" },
    { name: "DNK", code: "DK", currency: "DKK" },
    { name: "DOM", code: "DO", currency: "DOP" },
    { name: "DZA", code: "DZ", currency: "DZD" },
    { name: "ECU", code: "EC", currency: "USD" },
    { name: "EST", code: "EE", currency: "EUR" },
    { name: "EGY", code: "EG", currency: "EGP" },
    { name: "ETH", code: "ET", currency: "ETB" },
    { name: "FRA", code: "FR", currency: "EUR" },
    { name: "FJI", code: "FJ", currency: "FJD" },
    { name: "FLK", code: "FK", currency: "FKP" },
    { name: "GBR", code: "GB", currency: "GBP" },
    { name: "GEO", code: "GE", currency: "GEL" },
    { name: "GGY", code: "GG", currency: "GGP" },
    { name: "GHA", code: "GH", currency: "GHS" },
    { name: "GIB", code: "GI", currency: "GIP" },
    { name: "GMB", code: "GM", currency: "GMD" },
    { name: "GIN", code: "GN", currency: "GNF" },
    { name: "GTM", code: "GT", currency: "GTQ" },
    { name: "GUY", code: "GY", currency: "GYD" },
    { name: "HKG", code: "HK", currency: "HKD" },
    { name: "HND", code: "HN", currency: "HNL" },
    { name: "HRV", code: "HR", currency: "HRK" },
    { name: "HTI", code: "HT", currency: "HTG" },
    { name: "HUN", code: "HU", currency: "HUF" },
    { name: "IDN", code: "ID", currency: "IDR" },
    { name: "ISR", code: "IL", currency: "ILS" },
    { name: "IND", code: "IN", currency: "INR" },
    { name: "IRQ", code: "IQ", currency: "IQD" },
    { name: "IRN", code: "IR", currency: "IRR" },
    { name: "ISL", code: "IS", currency: "ISK" },
    { name: "JAM", code: "JM", currency: "JMD" },
    { name: "JOR", code: "JO", currency: "JOD" },
    { name: "JPN", code: "JP", currency: "JPY" },
    { name: "KEN", code: "KE", currency: "KES" },
    { name: "KGZ", code: "KG", currency: "KGS" },
    { name: "KHM", code: "KH", currency: "KHR" },
    { name: "COM", code: "KM", currency: "KMF" },
    { name: "PRK", code: "KP", currency: "KPW" },
    { name: "KOR", code: "KR", currency: "KRW" },
    { name: "KWT", code: "KW", currency: "KWD" },
    { name: "CYM", code: "KY", currency: "KYD" },
    { name: "KAZ", code: "KZ", currency: "KZT" },
    { name: "LAO", code: "LA", currency: "LAK" },
    { name: "LBN", code: "LB", currency: "LBP" },
    { name: "LKA", code: "LK", currency: "LKR" },
    { name: "LBR", code: "LR", currency: "LRD" },
    { name: "LSO", code: "LS", currency: "LSL" },
    { name: "LTU", code: "LT", currency: "LTL" },
    { name: "LVA", code: "LV", currency: "LVL" },
    { name: "LBY", code: "LY", currency: "LYD" },
    { name: "MAR", code: "MA", currency: "MAD" },
    { name: "MDA", code: "MD", currency: "MDL" },
    { name: "MDG", code: "MG", currency: "MGA" },
    { name: "MKD", code: "MK", currency: "MKD" },
    { name: "MMR", code: "MM", currency: "MMK" },
    { name: "MNG", code: "MN", currency: "MNT" },
    { name: "MAC", code: "MO", currency: "MOP" },
    { name: "MRT", code: "MR", currency: "MRU" },
    { name: "MLT", code: "MT", currency: "MTL" },
    { name: "MUS", code: "MU", currency: "MUR" },
    { name: "MDV", code: "MV", currency: "MVR" },
    { name: "MWI", code: "MW", currency: "MWK" },
    { name: "MEX", code: "MX", currency: "MXN" },
    { name: "MYS", code: "MY", currency: "MYR" },
    { name: "MAR", code: "MA", currency: "MAD" },
    { name: "MOZ", code: "MZ", currency: "MZN" },
    { name: "NAM", code: "NA", currency: "NAD" },
    { name: "NRU", code: "NR", currency: "AUD" },
    { name: "NPL", code: "NP", currency: "NPR" },
    { name: "NLD", code: "NL", currency: "EUR" },
    { name: "NZL", code: "NZ", currency: "NZD" },
    { name: "NIC", code: "NI", currency: "NIO" },
    { name: "NER", code: "NE", currency: "XOF" },
    { name: "NGA", code: "NG", currency: "NGN" },
    { name: "NIU", code: "NU", currency: "NZD" },
    { name: "NFK", code: "NF", currency: "AUD" },
    { name: "MNP", code: "MP", currency: "USD" },
    { name: "NOR", code: "NO", currency: "NOK" },
    { name: "OMN", code: "OM", currency: "OMR" },
    { name: "PAK", code: "PK", currency: "PKR" },
    { name: "PLW", code: "PW", currency: "USD" },
    { name: "PNG", code: "PG", currency: "PGK" },
    { name: "PRY", code: "PY", currency: "PYG" },
    { name: "PER", code: "PE", currency: "PEN" },
    { name: "PHL", code: "PH", currency: "PHP" },
    { name: "PCN", code: "PN", currency: "NZD" },
    { name: "POL", code: "PL", currency: "PLN" },
    { name: "PRT", code: "PT", currency: "EUR" },
    { name: "PRI", code: "PR", currency: "USD" },
    { name: "QAT", code: "QA", currency: "QAR" },
    { name: "REU", code: "RE", currency: "EUR" },
    { name: "ROU", code: "RO", currency: "RON" },
    { name: "RUS", code: "RU", currency: "RUB" },
    { name: "RWA", code: "RW", currency: "RWF" },
    { name: "BLM", code: "BL", currency: "EUR" },
    { name: "SHN", code: "SH", currency: "SHP" },
    { name: "KNA", code: "KN", currency: "XCD" },
    { name: "LCA", code: "LC", currency: "XCD" },
    { name: "SPM", code: "PM", currency: "EUR" },
    { name: "VCT", code: "VC", currency: "XCD" },
    { name: "WSM", code: "WS", currency: "WST" },
    { name: "SMR", code: "SM", currency: "EUR" },
    { name: "STP", code: "ST", currency: "STN" },
    { name: "SAU", code: "SA", currency: "SAR" },
    { name: "SEN", code: "SN", currency: "XOF" },
    { name: "SYC", code: "SC", currency: "SCR" },
    { name: "SLE", code: "SL", currency: "SLL" },
    { name: "SGP", code: "SG", currency: "SGD" },
    { name: "SXM", code: "SX", currency: "ANG" },
    { name: "SVD", code: "VC", currency: "XCD" },
    { name: "SYR", code: "SY", currency: "SYP" },
    { name: "TWN", code: "TW", currency: "TWD" },
    { name: "TJK", code: "TJ", currency: "TJS" },
    { name: "TZA", code: "TZ", currency: "TZS" },
    { name: "THA", code: "TH", currency: "THB" },
    { name: "TLS", code: "TL", currency: "USD" },
    { name: "TGO", code: "TG", currency: "XOF" },
    { name: "TKL", code: "TK", currency: "NZD" },
    { name: "TON", code: "TO", currency: "TOP" },
    { name: "TTO", code: "TT", currency: "TTD" },
    { name: "TUN", code: "TN", currency: "TND" },
    { name: "TUR", code: "TR", currency: "TRY" },
    { name: "TCA", code: "TC", currency: "USD" },
    { name: "TUV", code: "TV", currency: "AUD" },
    { name: "UGA", code: "UG", currency: "UGX" },
    { name: "UKR", code: "UA", currency: "UAH" },
    { name: "ARE", code: "AE", currency: "AED" },
    { name: "GBR", code: "GB", currency: "GBP" },
    { name: "USA", code: "US", currency: "USD" },
    { name: "URY", code: "UY", currency: "UYU" },
    { name: "UZB", code: "UZ", currency: "UZS" },
    { name: "VUT", code: "VU", currency: "VUV" },
    { name: "VEN", code: "VE", currency: "VES" },
    { name: "VNM", code: "VN", currency: "VND" },
    { name: "WLF", code: "WF", currency: "XPF" },
    { name: "YEM", code: "YE", currency: "YER" },
    { name: "ZMB", code: "ZM", currency: "ZMW" },
    { name: "ZWE", code: "ZW", currency: "ZWL" }
];


    const uinput=document.getElementById(`input`)
    const from = document.getElementById('select_from');
    const to = document.getElementById('select_to');
    const fromimg = document.getElementById('from_image');
    const toimg = document.getElementById('to_img');
    const fromcurr=document.getElementById(`.from select_from`);
    const result=document.getElementById(`result`);
    let crncy=`AED`;
    let convered=`AED`;
    let userinput=1;
    const btn=document.getElementById(`btn`);

    countries.forEach(element => {
        from.innerHTML += `<option value="${element.code}" key="${element.currency}">${element.name}</option>`;
        to.innerHTML += `<option value="${element.code}" key="${element.currency}">${element.name}</option>`;
    });

    from.addEventListener('change', (e) => {
        const selectedCode = e.target.value;
        const selectedCurrency = e.target.options[e.target.selectedIndex].getAttribute('key');
        // console.log(`Selected flag: ${selectedCode}`);
        // console.log(`Selected currency: ${selectedCurrency}`);
        fromimg.innerHTML = `<img src="https://flagsapi.com/${selectedCode}/flat/48.png" alt="country flag">`;
        crncy = selectedCurrency;
        // console.log(crncy)
      });
    
      to.addEventListener('change', (e) => {
        const selectedCode = e.target.value;
        const selectedCurrency = e.target.options[e.target.selectedIndex].getAttribute('key');
        // console.log(`Selected flag: ${selectedCode}`);
        // console.log(`Selected currency: ${selectedCurrency}`);
        toimg.innerHTML = `<img src="https://flagsapi.com/${selectedCode}/flat/48.png" alt="country flag">`;
        convered=selectedCurrency;
        // console.log(convered)
    });
   


    uinput.addEventListener(`input`,e=>{
        let number=1;
        number=e.target.value;
        userinput=number
        console.log(userinput);
    });

    




btn.addEventListener(`click`,async(e)=>{
    if (userinput<1 ) {
        alert(`Invalid Number`)
    }
    let URl= `https:v6.exchangerate-api.com/v6/fe6ed7a8695a033c1bc3bf4e/latest/${crncy}`
    const response = await fetch(URl);
    // console.log(response);
    const data = await response.json();
    let final=(data.conversion_rates[convered]);
    // console.log(final);
    // console.log(convered)

    function calculate() {
        return userinput*(final);
    }
    result.innerHTML=`
    <p>${userinput} ${crncy} is equla to ${calculate()} ${convered}</p>
    `;
    uinput.value=``;
    
})  ;


        
   

    