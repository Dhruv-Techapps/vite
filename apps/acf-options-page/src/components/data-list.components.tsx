/* eslint-disable react/jsx-no-comment-textnodes */
export function DataList() {
  const REGEX_RANGE_STRING = '{6,12}';
  const REGEX_STRING = '{6}';
  const EMAIL_FIRST = `{1, 20}`;
  const EMAIL_SECOND = `{3, 15}`;
  const EMAIL_THIRD = `{2, 4}`;

  return (
    <>
      <datalist id='retry'>
        <option value='-2'>&infin; Infinity</option>
        <option value='1'>1</option>
        <option value='2'>2</option>
      </datalist>
      <datalist id='recheck'>
        <option value='-2'>&infin; Infinity</option>
        <option value='1'>1</option>
        <option value='2'>2</option>
      </datalist>
      <datalist id='repeat'>
        <option value='-2'>&infin; Infinity</option>
        <option value='1'>1</option>
        <option value='2'>2</option>
      </datalist>
      <datalist id='interval'>
        <option value='0.25'>0.25</option>
        <option value='1'>1</option>
        <option value='1e5'>1e5</option>
      </datalist>
      <datalist id='schedule-date'>
        <option value='2025-01-01'>1st Jan 2025</option>
        <option value='2025-01-31'>31st Jan 2025</option>
        <option value='2025-12-01'>1st Dec 2025</option>
        <option value='2025-12-31'>31st Dec 2025</option>
      </datalist>
      <datalist id='schedule-time'>
        <option value='01:00:00.000'>at afternoon 1 AM</option>
        <option value='00:00:00.000'>at midnight 12 AM</option>
        <option value='13:00:00.000'>at afternoon 1 PM</option>
        <option value='15:15:15.150'>at afternoon 3 PM and 15 mins and 15 seconds and 15 milliseconds</option>
      </datalist>
      <datalist id='schedule-repeat'>
        <option value='1'>1 Min</option>
        <option value='60'>1 Hour</option>
        <option value='1440'>1 Day</option>
        <option value='10080'>1 Week</option>
        <option value='43800'>1 Month</option>
        <option value='525600'>1 Year</option>
      </datalist>
      <datalist id='elementFinder'>
        <option value='#'>#</option>
        <option value='ClassName::'>ClassName::</option>
        <option value='Name::'>Name::</option>
        <option value='TagName::'>TagName::</option>
        <option value='Selector::'>Selector::</option>
        <option value='SelectorAll::'>SelectorAll::</option>
        <option value='//input[@id="element-id"]'>//input[@id=&quot;element-id&quot;]</option>
        <option value='//a[@href]'>//a[@href]</option>
        <option value='//a[@href="url"]'>//a[@href=&quot;url&quot;]</option>
        <option value='//button[contains(@class,"me")]'>//button[contains(@class,&quot;me&quot;)]</option>
        <option value='//button[contains(text(),"Me")]'>//button[contains(text(),&quot;Me&quot;)]</option>
        <option value='//div[substring(text(), 0, 3) >= "50"]'>//div[substring(text(), 0, 3) &gt;= &quot;50&quot;]</option>
        <option value='//button[contains(@class,"me") and contains(text(),"Me")]'>//button[contains(@class,&quot;me&quot;) and contains(text(),&quot;Me&quot;)]</option>
        <option value='//li[contains(text(),"9")]'>//li[contains(text(),&quot;9&quot;)]</option>
        <option value='//li[contains(text(),"9") or contains(text(),"10")][1]'>//li[contains(text(),&quot;9&quot;) or contains(text(),&quot;10&quot;)][1]</option>
        <option value='//option[contains(text(),"9")]'>//option[contains(text(),&quot;9&quot;)]</option>
        <option value='//option[contains(text(),"9") or contains(text(),"10")][1]'>//option[contains(text(),&quot;9&quot;) or contains(text(),&quot;10&quot;)][1]</option>
        <option value='//select[@id="product-size"]/option[2]'>//select[@id=&quot;product-size&quot;]/option[2]</option>
      </datalist>
      <datalist id='value'>
        <option value='Query::param'>Query::param</option>
        <option value='Copy::'>Copy::</option>
        <option value='Copy::[\d]+'>Copy::[\d]+</option>
        <option value='Copy::[\w]+'>Copy::[\w]+</option>
        <option value='Copy::[a-z]{3}'>Copy::[\w]+</option>
        <option value='Copy::[A-Z]{6}'>Copy::[\w]+</option>
        <option value='Copy::[.]{6}'>Copy::[\w]+</option>
        <option value='Clipboard::Copy::'>Clipboard::Copy</option>
        <option value='Clipboard::Copy::[\d]+'>Clipboard::Copy[\d]+</option>
        <option value='Clipboard::Copy::[\w]+'>Clipboard::Copy[\w]+</option>
        <option value='Clipboard::Copy::[a-z]{3}'>Clipboard::Copy[\w]+</option>
        <option value='Clipboard::Copy::[A-Z]{6}'>Clipboard::Copy[\w]+</option>
        <option value='Clipboard::Copy::[.]{6}'>Clipboard::Copy[\w]+</option>
        <option value='Paste::'>Paste::</option>
        <option value='Paste::at(5)'>Paste::at(5)</option>
        <option value='Paste::charAt(4)'>Paste::charAt(4)</option>
        <option value='Paste::concat("World")'>Paste::concat(&quot;World&quot;)</option>
        <option value='Paste::replace("apple", "orange")'>Paste::replace(&quot;apple&quot;, &quot;orange&quot;)</option>
        <option value='Paste::replaceAll("apple", "orange")'>Paste::replaceAll(&quot;apple&quot;, &quot;orange&quot;)</option>
        <option value='Paste::slice(31)'>Paste::slice(31)</option>
        <option value='Paste::substring(1, 3)'>Paste::substring(1, 3)</option>
        <option value='Paste::substring(3)'>Paste::substring(3)</option>
        <option value='Paste::toLowerCase()'>Paste::toLowerCase()</option>
        <option value='Paste::toUpperCase()'>Paste::toUpperCase()</option>
        <option value='Paste::trim()'>Paste::trim()</option>
        <option value='Paste::trimStart()'>Paste::trimStart()</option>
        <option value='Paste::trimEnd()'>Paste::trimEnd()</option>
        <option value='Clipboard::Paste::'>Clipboard::Paste::</option>
        <option value='Clipboard::Paste::at(5)'>Clipboard::Paste::at(5)</option>
        <option value='Clipboard::Paste::charAt(4)'>Clipboard::Paste::charAt(4)</option>
        <option value='Clipboard::Paste::concat("World")'>Clipboard::Paste::concat(&quot;World&quot;)</option>
        <option value='Clipboard::Paste::replace("apple", "orange")'>Clipboard::Paste::replace(&quot;apple&quot;, &quot;orange&quot;)</option>
        <option value='Clipboard::Paste::replaceAll("apple", "orange")'>Clipboard::Paste::replaceAll(&quot;apple&quot;, &quot;orange&quot;)</option>
        <option value='Clipboard::Paste::slice(31)'>Clipboard::Paste::slice(31)</option>
        <option value='Clipboard::Paste::substring(1, 3)'>Clipboard::Paste::substring(1, 3)</option>
        <option value='Clipboard::Paste::substring(3)'>Clipboard::Paste::substring(3)</option>
        <option value='Clipboard::Paste::toLowerCase()'>Clipboard::Paste::toLowerCase()</option>
        <option value='Clipboard::Paste::toUpperCase()'>Clipboard::Paste::toUpperCase()</option>
        <option value='Clipboard::Paste::trim()'>Clipboard::Paste::trim()</option>
        <option value='Clipboard::Paste::trimStart()'>Clipboard::Paste::trimStart()</option>
        <option value='Clipboard::Paste::trimEnd()'>Clipboard::Paste::trimEnd()</option>
        <option value='<random[a-z]{6}>'>&lt;random[a-z]{REGEX_STRING}&gt;</option>
        <option value='<random[a-z]{6,12}>'>&lt;random[a-z]{REGEX_RANGE_STRING}&gt;</option>
        <option value='<random[A-Z]{6}>'>&lt;random[A-Z]{REGEX_STRING}&gt;</option>
        <option value='<random[\d]{6}>'>&lt;random[\d]{REGEX_STRING}&gt;</option>
        <option value='<random[\w]{6}>'>&lt;random[\w]{REGEX_STRING}&gt;</option>
        <option value='<random(hello|world)>'>&lt;random(hello|world)&gt;</option>
        <option value='<random(sun|mon|tue|wednes|thurs|fri|satur)day>'>&lt;random(sun|mon|tue|wednes|thurs|fri|satur)day&gt;</option>
        <option value='<random[a-z0-9._+-]{1, 20}@[a-z0-9]{3, 15}\.[a-z]{2, 4}>'>
          &lt;random[a-z0-9._+-]{EMAIL_FIRST}@[a-z0-9]{EMAIL_SECOND}\.[a-z]{EMAIL_THIRD}&gt;
        </option>
        <option value='<randomxxx xtreme dragon warrior xxx /i>'>&lt;randomxxx xtreme dragon warrior xxx /i&gt;</option>
        <option value='<randomhello+ (world|to you)>'>&lt;randomhello+ (world|to you)&gt;</option>
        <option value='<random stuff: .+>'>&lt;random stuff: .+&gt;</option>
        <option value='ScrollTo::TopLeft'>ScrollTo::TopLeft</option>
        <option value='ScrollTo::TopRight'>ScrollTo::TopRight</option>
        <option value='ScrollTo::BottomLeft'>ScrollTo::BottomLeft</option>
        <option value='ScrollTo::BottomRight'>ScrollTo::BottomRight</option>
        <option value='TouchEvents::touchstart'>TouchEvents::touchstart</option>
        <option value='TouchEvents::touchend'>TouchEvents::touchend</option>
        <option value='TouchEvents::touchmove'>TouchEvents::touchmove</option>
        <option value='TouchEvents::touchcancel'>TouchEvents::touchcancel</option>
        <option value='MouseEvents::click'>MouseEvents::click</option>
        <option value='MouseEvents::dblclick'>MouseEvents::dblclick</option>
        <option value='MouseEvents::input'>MouseEvents::input</option>
        <option value='MouseEvents::change'>MouseEvents::change</option>
        <option value='MouseEvents::["input","change"]'>MouseEvents::[&quot;input&quot;,&quot;change&quot;]</option>
        <option value='MouseEvents::["mouseover", "mousedown", "mouseup", "click"]'>MouseEvents::[&quot;mouseover&quot;, &quot;mousedown&quot;, &quot;mouseup&quot;, &quot;click&quot;]</option>
        <option value='FormEvents::blur'>FormEvents::blur</option>
        <option value='FormEvents::click'>FormEvents::click</option>
        <option value='FormEvents::click-once'>FormEvents::click-once</option>
        <option value='FormEvents::focus'>FormEvents::focus</option>
        <option value='FormEvents::select'>FormEvents::select</option>
        <option value='FormEvents::clear'>FormEvents::clear</option>
        <option value='FormEvents::remove'>FormEvents::remove</option>
        <option value='FormEvents::submit'>FormEvents::submit</option>
        <option value='KeyEvents::Example Text'>KeyEvents::Example Text</option>
        <option value='KeyEvents::{"value":"Example text","delay":3}'>KeyEvents::&#123;&quot;value&quot;:&quot;Example text&quot;,&quot;delay&quot;:3&#125;</option>
        <option value='example<batchRepeat>@gmail.com'>example&lt;batchRepeat&gt;@gmail.com</option>
        <option value='LocationCommand::reload'>LocationCommand::reload</option>
        <option value='LocationCommand::href::url'>LocationCommand::href::url</option>
        <option value='LocationCommand::replace::url'>LocationCommand::replace::url</option>
        <option value='LocationCommand::assign::url'>LocationCommand::assign::url</option>
        <option value='LocationCommand::open::https://getautoclicker.com'>LocationCommand::open::https://getautoclicker.com</option>
        <option value='Tabs::reload'>Tabs::reload</option>
        <option value='Tabs::update::{"url":"https://test.getautoclicker.com/"}'>Tabs::update::&#123;"url":"https://test.getautoclicker.com/"&#123;</option>
        <option value='WindowCommand::close'>WindowCommand::close</option>
        <option value='WindowCommand::open::https://getautoclicker.com'>WindowCommand::open::https://getautoclicker.com</option>
        <option value='WindowCommand::delete'>WindowCommand::delete</option>
        <option value='WindowCommand::selectAll'>WindowCommand::selectAll</option>
        <option value='Attr::set::prop::value'>Attr::set::prop::value</option>
        <option value='Attr::remove::prop'>Attr::remove::prop</option>
        <option value='Class::add::className'>Class::add::className</option>
        <option value='Class::remove::className'>Class::remove::className</option>
        <option value='Append::'>Append::</option>
        <option value='Prepend::'>Prepend::</option>
        <option value='Replace::Hello::World'>Replace::Hello::World</option>
        <option value='KeyboardEvents::'>KeyboardEvents::</option>
        <option value='KeyboardEvents::0'>KeyboardEvents::0</option>
        <option value='KeyboardEvents::9'>KeyboardEvents::9</option>
        <option value='KeyboardEvents::a'>KeyboardEvents::a</option>
        <option value='KeyboardEvents::z'>KeyboardEvents::z</option>
        <option value='KeyboardEvents::Enter'>KeyboardEvents::Enter</option>
        <option value='KeyboardEvents::Shift+Enter'>KeyboardEvents::Shift+Enter</option>
        <option value='KeyboardEvents::Shift+Alt+Enter'>KeyboardEvents::Shift+Alt+Enter</option>
        <option value='KeyboardEvents::Tab'>KeyboardEvents::Tab</option>
        <option value='GoogleSheets::Sheet1!A1'>GoogleSheets::Sheet1!A1</option>
        <option value='GoogleSheets::Sheet1!B1'>GoogleSheets::Sheet1!B1</option>
        <option value='GoogleSheets::Sheet1!A2'>GoogleSheets::Sheet1!A2</option>
        <option value='GoogleSheets::Sheet1!Z99'>GoogleSheets::Sheet1!Z99</option>
        <option value='GoogleSheets::Sheet1!A<batchRepeat>'>GoogleSheets::Sheet1!A&lt;batchRepeat&gt;</option>
        <option value='GoogleSheets::Sheet1!A<actionRepeat>'>GoogleSheets::Sheet1!A&lt;actionRepeat&gt;</option>
        <option value='GoogleSheets::Sheet1!A<sessionCount>'>GoogleSheets::Sheet1!A&lt;sessionCount&gt;</option>
        <option value='Element::remove'>Element::remove</option>
        <option value='Element::scrollIntoView'>Element::scrollIntoView</option>
        <option value='Element::scrollIntoView::true'>Element::scrollIntoView::true</option>
        <option value='Element::scrollIntoView::{ "behavior": "smooth", "block": "end", "inline": "nearest" }'>
          Element::scrollIntoView::&#123; "behavior": "smooth", "block": "end", "inline": "nearest" &#123;
        </option>
        <option value='Image::'>Image::</option>
        <option value='Image::#'>Image::#</option>
        <option value='Image::ClassName::'>Image::ClassName::</option>
        <option value='Image::Name::'>Image::Name::</option>
        <option value='Image::Selector::'>Image::Selector::</option>
        <option value='Image:://input[@id="element-id"]'>Image:://input[@id=&quot;element-id&quot;]</option>
        <option value='openai::your prompt'>openai::your prompt</option>
        {/*<option value='openai::summarizeText'>openai::summarizeText</option>
        <option value='openai::translateText'>openai::translateText</option>
        <option value='openai::classifyText'>openai::classifyText</option>
        <option value='openai::analyzeSentiment'>openai::analyzeSentiment</option>*/}
      </datalist>
      <datalist id='valueExtractor'>
        <option value='@id'>To get id attribute of element</option>
        <option value='@class'>To get class attribute of element</option>
        <option value='@data-attr'>To get data attribute of element</option>
        <option value='\d'>extract 1 number</option>
        <option value='\d+'>extract 1 or more number</option>
        <option value='^\d+'>extract 1 or more number from starting of string only</option>
        <option value='\d+$'>extract 1 or more number from ending of string only</option>
        <option value='\d+(\.\d)*'>extract decimal number 29.99</option>
        <option value='\d{2}'>extract only first two number 29</option>
        <option value='\d{2}-\d{2}-\d{4}'>extract in following format 28-02-2021</option>
      </datalist>
    </>
  );
}
