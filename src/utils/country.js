/*
 * @Author: shenmingming
 * @Date: 2022-09-01 13:22:52
 * @LastEditors: shenmingming
 * @LastEditTime: 2022-09-07 11:16:20
 * @Description: 国家数据配置
 */
const country = {
  countryName_c2e: { // 国家名称对照（中转英）
    '未知': 'unknown',
    '库克群岛': 'Cook Islands',
    '老挝': 'Laos',
    '马尔代夫': 'Maldives',
    '马绍尔群岛': 'Marshall Islands',
    '摩纳哥': 'Monaco',
    '瑙鲁': 'Nauru',
    '圣基茨和尼维斯': 'Saint Christopher And Nevis',
    '圣多美和普林西比民主共和国': 'The Democratic Republic of Sao Tome and Principe',
    '梵蒂冈': 'Vatican City',
    '图瓦卢': 'Tuvalu',
    '阿布哈兹': 'Abkhazia',
    '安圭拉': 'Anguilla',
    '阿鲁巴': 'Aruba',
    '圣诞岛': 'Christmas Lsland',
    '库拉索': 'Curacao',
    '法属圭亚那': 'French Guiana',
    '直布罗陀': 'Gibraltar',
    '瓜德罗普': 'Guadeloupe',
    '根西岛': 'Guernsey',
    '象牙海岸': 'Ivory Coast',
    '科索沃': 'Kosovo',
    '马提尼克': 'Martinique',
    '马约特': 'Mayotte',
    '纳戈尔诺-卡拉巴赫': 'Nagorno-Karabakh',
    '诺福克岛': 'Norfolk Island',
    '皮特凯恩群岛': 'Pitcairn Islands',
    '德涅斯特河左岸': 'Pridnestrovie',
    '留尼汪': 'Reunion',
    '圣马利诺': 'San Marino',
    '圣马力诺': 'San Marino',
    '荷属圣马丁': 'Sint Maarten',
    '索马里兰': 'Somaliland',
    '南奥塞梯': 'South Ossetia',
    '斯瓦尔巴群岛': 'Svalbard',
    '托克劳': 'Tokelau',
    '坦桑尼亚联合共和国': 'United Republic of Tanzania',
    '英属维尔京群岛': 'The British Virgin Islands',
    '瓦利斯和富图纳群岛': 'Wallis And Futuna',
    '西岸': 'West Bank',
    '索马里': 'Somalia',
    '列支敦士登': 'Liechtenstein',
    '摩洛哥': 'Morocco',
    '西撒哈拉': 'W. Sahara',
    '塞尔维亚共和国': 'Serbia',
    '塞尔维亚': 'Serbia',
    '阿富汗': 'Afghanistan',
    '安哥拉': 'Angola',
    '阿尔巴尼亚': 'Albania',
    '艾兰得': 'Aland',
    '安道尔': 'Andorra',
    '阿联酋': 'United Arab Emirates',
    '阿拉伯联合酋长国': 'United Arab Emirates',
    '阿根廷': 'Argentina',
    '亚美尼亚': 'Armenia',
    '美属萨摩亚': 'American Samoa',
    '法属南半球和南极领地': 'Fr. S. Antarctic Lands',
    '安提瓜和巴布达': 'Antigua and Barb.',
    '澳大利亚': 'Australia',
    '奥地利': 'Austria',
    '阿塞拜疆': 'Azerbaijan',
    '布隆迪': 'Burundi',
    '比利时': 'Belgium',
    '贝宁': 'Benin',
    '布基纳法索': 'Burkina Faso',
    '孟加拉国': 'Bangladesh',
    '保加利亚': 'Bulgaria',
    '巴林': 'Bahrain',
    '巴哈马': 'Bahamas',
    '波斯尼亚和黑塞哥维那': 'Bosnia and Herz.',
    '白俄罗斯': 'Belarus',
    '伯利兹': 'Belize',
    '百慕大': 'Bermuda',
    '玻利维亚': 'Bolivia',
    '巴西': 'Brazil',
    '巴巴多斯': 'Barbados',
    '文莱': 'Brunei',
    '不丹': 'Bhutan',
    '博茨瓦纳': 'Botswana',
    '中非': 'Central African Rep.',
    '中非共和国': 'Central African Rep.',
    '加拿大': 'Canada',
    '瑞士': 'Switzerland',
    '智利': 'Chile',
    '中国': 'China',
    '科特迪瓦': "Côte d'Ivoire",
    '喀麦隆': 'Cameroon',
    '刚果民主共和国': 'Dem. Rep. Congo',
    '刚果共和国': 'Congo',
    '哥伦比亚': 'Colombia',
    '科摩罗': 'Comoros',
    '佛得角': 'Cape Verde',
    '哥斯达黎加': 'Costa Rica',
    '古巴': 'Cuba',
    '开曼群岛': 'Cayman Is.',
    '北塞浦路斯': 'N. Cyprus',
    '塞浦路斯': 'Cyprus',
    '捷克': 'Czech Rep.',
    '捷克共和国': 'Czech Rep.',
    '德国': 'Germany',
    '吉布提': 'Djibouti',
    '多明尼克': 'Dominica',
    '多米尼克': 'Dominica',
    '丹麦': 'Denmark',
    '多明尼加': 'Dominican',
    '多明尼加共和国': 'Dominican Rep.',
    '多米尼加': 'Dominican',
    '多米尼加共和国': 'Dominican Rep.',
    '阿尔及利亚': 'Algeria',
    '厄瓜多尔': 'Ecuador',
    '埃及': 'Egypt',
    '厄立特里亚': 'Eritrea',
    '西班牙': 'Spain',
    '爱沙尼亚': 'Estonia',
    '埃塞俄比亚': 'Ethiopia',
    '芬兰': 'Finland',
    '斐济': 'Fiji',
    '福克兰群岛': 'Falkland Is.',
    '法国': 'France',
    '法罗群岛': 'Faeroe Is.',
    '密克罗尼西亚联邦': 'Micronesia',
    '加蓬': 'Gabon',
    '英国': 'United Kingdom',
    '格鲁吉亚': 'Georgia',
    '加纳': 'Ghana',
    '几内亚': 'Guinea',
    '冈比亚': 'Gambia',
    '几内亚比绍': 'Guinea-Bissau',
    '赤道几内亚': 'Eq. Guinea',
    '希腊': 'Greece',
    '格林纳达': 'Grenada',
    '格陵兰': 'Greenland',
    '危地马拉': 'Guatemala',
    '关岛': 'Guam',
    '圭亚那': 'Guyana',
    '赫德岛和麦克唐纳群岛': 'Heard I. and McDonald Is.',
    '洪都拉斯': 'Honduras',
    '克罗地亚': 'Croatia',
    '海地': 'Haiti',
    '匈牙利': 'Hungary',
    '印尼': 'Indonesia',
    '印度尼西亚': 'Indonesia',
    '马恩岛': 'Isle of Man',
    '印度': 'India',
    '英属印度洋领地': 'Br. Indian Ocean Ter.',
    '爱尔兰': 'Ireland',
    '伊朗': 'Iran',
    '伊拉克': 'Iraq',
    '冰岛': 'Iceland',
    '以色列': 'Israel',
    '意大利': 'Italy',
    '牙买加': 'Jamaica',
    '泽西岛': 'Jersey',
    '约旦': 'Jordan',
    '日本': 'Japan',
    '锡亚琴冰川': 'Siachen Glacier',
    '哈萨克斯坦': 'Kazakhstan',
    '肯尼亚': 'Kenya',
    '吉尔吉斯斯坦': 'Kyrgyzstan',
    '柬埔寨': 'Cambodia',
    '基里巴斯': 'Kiribati',
    '韩国': 'Korea',
    '科威特': 'Kuwait',
    '老挝人民民主共和国': 'Lao PDR',
    '黎巴嫩': 'Lebanon',
    '利比里亚': 'Liberia',
    '利比亚': 'Libya',
    '圣卢西亚': 'Saint Lucia',
    '斯里兰卡': 'Sri Lanka',
    '莱索托': 'Lesotho',
    '立陶宛': 'Lithuania',
    '卢森堡': 'Luxembourg',
    '拉脱维亚': 'Latvia',
    '摩尔多瓦': 'Moldova',
    '马达加斯加': 'Madagascar',
    '墨西哥': 'Mexico',
    '马其顿': 'Macedonia',
    '北马其顿': 'North Macedonia',
    '马里': 'Mali',
    '马耳他': 'Malta',
    '缅甸': 'Myanmar',
    '黑山': 'Montenegro',
    '蒙古': 'Mongolia',
    '北马里亚纳群岛': 'N. Mariana Is.',
    '莫桑比克': 'Mozambique',
    '毛里塔尼亚': 'Mauritania',
    '蒙特塞拉特岛': 'Montserrat',
    '毛里求斯': 'Mauritius',
    '马拉维': 'Malawi',
    '马来西亚': 'Malaysia',
    '纳米比亚': 'Namibia',
    '新喀里多尼亚': 'New Caledonia',
    '尼日尔': 'Niger',
    '尼日利亚': 'Nigeria',
    '尼加拉瓜': 'Nicaragua',
    '纽埃': 'Niue',
    '荷兰': 'Netherlands',
    '挪威': 'Norway',
    '尼泊尔': 'Nepal',
    '新西兰': 'New Zealand',
    '阿曼': 'Oman',
    '巴基斯坦': 'Pakistan',
    '巴拿马': 'Panama',
    '秘鲁': 'Peru',
    '菲律宾': 'Philippines',
    '帕劳': 'Palau',
    '巴布亚新几内亚': 'Papua New Guinea',
    '波兰': 'Poland',
    '波多黎各': 'Puerto Rico',
    '朝鲜': 'Dem. Rep. Korea',
    '葡萄牙': 'Portugal',
    '巴拉圭': 'Paraguay',
    '巴勒斯坦': 'Palestine',
    '法属波利尼西亚': 'Fr. Polynesia',
    '卡塔尔': 'Qatar',
    '罗马尼亚': 'Romania',
    '俄罗斯': 'Russia',
    '俄罗斯联邦': 'Russia',
    '卢旺达': 'Rwanda',
    '沙特阿拉伯': 'Saudi Arabia',
    '苏丹': 'Sudan',
    '南苏丹': 'S. Sudan',
    '塞内加尔': 'Senegal',
    '新加坡': 'Singapore',
    '南乔治亚和南桑德威奇群岛': 'S. Geo. and S. Sandw. Is.',
    '圣赫勒拿岛': 'Saint Helena',
    '所罗门群岛': 'Solomon Is.',
    '塞拉利昂': 'Sierra Leone',
    '萨尔瓦多': 'El Salvador',
    '圣皮埃尔和密克隆群岛': 'St. Pierre and Miquelon',
    '圣多美和普林西比': 'São Tomé and Principe',
    '苏里南': 'Suriname',
    '斯洛伐克': 'Slovakia',
    '斯洛文尼亚': 'Slovenia',
    '瑞典': 'Sweden',
    '斯威士兰': 'Swaziland',
    '塞舌尔': 'Seychelles',
    '叙利亚': 'Syria',
    '特克斯和凯科斯群岛': 'Turks and Caicos Is.',
    '乍得': 'Chad',
    '多哥': 'Togo',
    '泰国': 'Thailand',
    '塔吉克斯坦': 'Tajikistan',
    '土库曼斯坦': 'Turkmenistan',
    '东帝汶': 'Timor-Leste',
    '汤加': 'Tonga',
    '特里尼达和多巴哥': 'Trinidad and Tobago',
    '特立尼达和多巴哥': 'Trinidad and Tobago',
    '突尼斯': 'Tunisia',
    '土耳其': 'Turkey',
    '坦桑尼亚': 'Tanzania',
    '乌干达': 'Uganda',
    '乌克兰': 'Ukraine',
    '乌拉圭': 'Uruguay',
    '美国': 'United States',
    '乌兹别克斯坦': 'Uzbekistan',
    '圣文森特和格林纳丁斯': 'St. Vin. and Gren.',
    '委内瑞拉': 'Venezuela',
    '美属维尔京群岛': 'U.S. Virgin Is.',
    '越南': 'Vietnam',
    '瓦努阿图': 'Vanuatu',
    '萨摩亚': 'Samoa',
    '也门': 'Yemen',
    '南非': 'South Africa',
    '赞比亚': 'Zambia',
    '津巴布韦': 'Zimbabwe'
  }
}

export default country
