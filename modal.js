///////////////////////////////////////////////////////////////////////////////////
//;==========================================
//; Title:  CIDR Calculator
//; Author: Emad Asefi / @emadasefi / emad.asefi@gmail.com
//; Version:  - v1.1
//;==========================================
///////////////////////////////////////////////////////////////////////////////////
function openModal() {
    document.getElementById('myModal').style.display = 'block';
    document.getElementById('languageSelect').value = 'en'; // Set default to English
    updateHelpContent('en'); // Load English help content
}

function closeModal(event) {
    if (event) {
        // Check if the click is outside the modal content
        if (event.target === document.getElementById('myModal')) {
            document.getElementById('myModal').style.display = 'none';
        }
    } else {
        // Close modal when clicking on the close button
        document.getElementById('myModal').style.display = 'none';
    }
}

function changeLanguage() {
    const language = document.getElementById('languageSelect').value;
    updateHelpContent(language);
}

function updateHelpContent(language) {
    const helpContentDiv = document.getElementById('helpContent');

    if (language === 'en') { //English
        helpContentDiv.innerHTML = `
			 <p>This script effectively handles conversions between IPv4 addresses and their integer representations while also calculating ranges based on CIDR notation. It provides a user-friendly interface for inputting CIDR ranges and displaying results in a structured format. The use of bitwise operations is central to its functionality, allowing efficient manipulation of IP address data. | Copyright &copy; 2024 Emad Asefi. All rights reserved.</p>
			<hr>
            <h2>Help Information</h2>
            <p>This CIDR Calculator allows you to input CIDR notations to calculate the corresponding IP ranges.</p>
            <h3>How to Use:</h3>
            <ul>
                <li>Enter one or more CIDR notations in the text area provided.</li>
                <li>Click on "Calculate IP Ranges" to see the results.</li>
                <li>The results will show the start and end IP addresses along with the total number of IPs in each range.</li>
                <li>You can download the results by clicking on the respective download buttons.</li>
                <li>Select a different language using the dropdown menu at the top.</li>
            </ul>`;
    } else if (language === 'fa') { //فارسی
        helpContentDiv.innerHTML = `
		<p>این اسکریپت به طور موثر تبدیل بین آدرس‌های IPv4 و نمایش‌های عدد صحیح آن‌ها را انجام می‌دهد در حالی که محدوده‌ها را بر اساس نماد CIDR نیز محاسبه می‌کند. این یک رابط کاربر پسند برای وارد کردن محدوده CIDR و نمایش نتایج در یک قالب ساختاریافته فراهم می کند. استفاده از عملیات بیتی در عملکرد آن نقش اساسی دارد و امکان دستکاری موثر داده های آدرس IP را فراهم می کند. | حق انتشار © 2024 برای عماد آصفی محفوظ است.</p>
		<hr>
		<div dir="RTL" style="text-align: right;">
		<h2>اطلاعات راهنما</h2>
		<p>این ماشین حساب CIDR به شما امکان می دهد نمادهای CIDR را برای محاسبه محدوده IP مربوطه وارد کنید.</p>
		<h3>نحوه استفاده:</h3>
		<ul>
		<li>یک یا چند نماد CIDR را در قسمت متن ارائه شده وارد کنید.</li>
		<li>برای مشاهده نتایج، روی "Ccalculate IP Ranges" کلیک کنید.</li>
		<li>نتایج آدرس IP شروع و پایان را به همراه تعداد کل IP ها در هر محدوده نشان می دهد.</li>
		<li>می توانید نتایج را با کلیک بر روی دکمه های دانلود مربوطه دانلود کنید.</li>
		<li>زبان دیگری را با استفاده از منوی کشویی در بالا انتخاب کنید.</li>
		</ul></div>
		`;
    } else if (language === 'ru') { //Russian
        helpContentDiv.innerHTML = `
		<!-- Russian Translation -->
		<p>Этот скрипт эффективно обрабатывает преобразования между адресами IPv4 и их целочисленными представлениями, а также вычисляет диапазоны на основе нотации CIDR. Он предоставляет удобный интерфейс для ввода диапазонов CIDR и отображения результатов в структурированном формате. Использование побитовых операций является центральным для его функциональности, что позволяет эффективно манипулировать данными IP-адресов. | Авторские права &copy; 2024 Эмад Асэфи. Все права защищены.</p>
		<hr>
		<h2>Информация о помощи</h2>
		<p>Этот калькулятор CIDR позволяет вам вводить нотации CIDR для расчета соответствующих диапазонов IP.</p>
		<h3>Как использовать:</h3>
		<ul>
		<li>Введите одну или несколько нотаций CIDR в предоставленной текстовой области.</li>
		<li>Нажмите "Рассчитать диапазоны IP", чтобы увидеть результаты.</li>
		<li>Результаты покажут начальные и конечные IP-адреса вместе с общим количеством IP в каждом диапазоне.</li>
		<li>Вы можете скачать результаты, нажав на соответствующие кнопки загрузки.</li>
		<li>Выберите другой язык с помощью выпадающего меню вверху.</li>
		</ul>
		`;
    } else if (language === 'de') { //German
        helpContentDiv.innerHTML = `
		<!-- German Translation -->
		<p>Dieses Skript verarbeitet effektiv Konvertierungen zwischen IPv4-Adressen und ihren ganzzahligen Darstellungen und berechnet auch Bereiche basierend auf der CIDR-Notation. Es bietet eine benutzerfreundliche Oberfläche zum Eingeben von CIDR-Bereichen und zur Anzeige der Ergebnisse in einem strukturierten Format. Die Verwendung von bitweisen Operationen ist zentral für seine Funktionalität und ermöglicht eine effiziente Manipulation von IP-Adressdaten. | Urheberrecht &copy; 2024 Emad Asefi. Alle Rechte vorbehalten.</p>
		<hr>
		<h2>Hilfeinformationen</h2>
		<p>Dieser CIDR-Rechner ermöglicht es Ihnen, CIDR-Notationen einzugeben, um die entsprechenden IP-Bereiche zu berechnen.</p>
		<h3>So verwenden Sie es:</h3>
		<ul>
		<li>Geben Sie eine oder mehrere CIDR-Notationen in das bereitgestellte Textfeld ein.</li>
		<li>Klicken Sie auf "IP-Bereiche berechnen", um die Ergebnisse zu sehen.</li>
		<li>Die Ergebnisse zeigen die Start- und End-IP-Adressen sowie die Gesamtzahl der IPs in jedem Bereich an.</li>
		<li>Sie können die Ergebnisse herunterladen, indem Sie auf die entsprechenden Download-Schaltflächen klicken.</li>
		<li>Wählen Sie eine andere Sprache über das Dropdown-Menü oben aus.</li>
		</ul>
		`;
    } else if (language === 'zh') { //Chinese
        helpContentDiv.innerHTML = `
		<!-- Chinese Translation -->
		<p>该脚本有效地处理IPv4地址与其整数表示之间的转换，同时根据CIDR表示法计算范围。它提供了一个用户友好的界面，用于输入CIDR范围并以结构化格式显示结果。位运算的使用是其功能的核心，允许高效地操作IP地址数据。 | 版权所有 &copy; 2024 Emad Asefi。保留所有权利。</p>
		<hr>
		<h2>帮助信息</h2>
		<p>此CIDR计算器允许您输入CIDR表示法以计算相应的IP范围。</p>
		<h3>使用方法：</h3>
		<ul>
		<li>在提供的文本区域中输入一个或多个CIDR表示法。</li>
		<li>点击“计算IP范围”以查看结果。</li>
		<li>结果将显示每个范围的起始和结束IP地址，以及每个范围内的IP总数。</li>
		<li>您可以通过单击各自的下载按钮下载结果。</li>
		<li>使用顶部的下拉菜单选择不同的语言。</li>
		</ul>
		`;
    } else if (language === 'tr') { //Turkish
        helpContentDiv.innerHTML = `
		<!-- Turkish Translation -->
		<p>Bu script, IPv4 adresleri ile tam sayı temsilleri arasında dönüşümleri etkili bir şekilde gerçekleştirirken, aynı zamanda CIDR notasyonuna dayalı aralıkları hesaplar. Kullanıcı dostu bir arayüz sunarak CIDR aralıklarını girmek ve sonuçları yapılandırılmış bir formatta görüntülemek için tasarlanmıştır. Bit düzeyindeki işlemlerin kullanımı, işlevselliğinin merkezinde yer alır ve IP adresi verilerinin verimli bir şekilde işlenmesini sağlar. | Tüm hakları saklıdır &copy; 2024 Emad Asefi.</p>
		<hr>
		<h2>Yardım Bilgisi</h2>
		<p>Bu CIDR Hesaplayıcı, karşılık gelen IP aralıklarını hesaplamak için CIDR notasyonlarını girmenize olanak tanır.</p>
		<h3>Kullanım Şekli:</h3>
		<ul>
		<li>Sahip olduğunuz metin alanına bir veya daha fazla CIDR notasyonu girin.</li>
		<li>Sonuçları görmek için "IP Aralıklarını Hesapla"ya tıklayın.</li>
		<li>Sonuçlar, her aralıktaki başlangıç ve bitiş IP adreslerini ve toplam IP sayısını gösterecektir.</li>
		<li>Sonuçları ilgili indirme butonlarına tıklayarak indirebilirsiniz.</li>
		<li>Üstteki açılır menüyü kullanarak farklı bir dil seçin.</li>
		</ul>
		`;
    }
};
///////////////////////////////////////////////////////////////////////////////////
//;==========================================
//; Title:  CIDR Calculator
//; Author: Emad Asefi / @emadasefi / emad.asefi@gmail.com
//; Version:  - v1.1
//;==========================================
///////////////////////////////////////////////////////////////////////////////////