import { Container, Loader, Page } from "../../components";
import styles from './ContactsPage.module.scss'

export const ContactsPage = () => {
    return (
        <Page>
            <Container>
                <h2 className="title">Контактная информация</h2>
                <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab165ab7ae9a85bc83101b3cc499d323ec11204965a4b8029bb3d45d33ac7dfad&amp;source=constructor"
                    className={styles.map}
                    frameBorder="0"
                />

                <p className={styles.text}><b>Адрес:</b> улица Луначарского, 86к10, Речица, Гомельская область</p>
                <p className={styles.text}><b>Время приема заказов:</b> ежедневно с 8:00 до 20:00</p>
                <p className={styles.text}><b>Время работы:</b> ежедневно с 8:00 до 17:30</p>
                <p className={styles.textPhone}><b>Телефоны:</b> <a href="tel:+375 (29) 244-91-32">+375 (29) 244-91-32</a> <br></br> <a href="tel:+375 (33) 304-86-72">+375 (33) 304-86-72</a></p>
                <p className={styles.text}><b>Email:</b> <a href="mailto:ylia7707028@gmail.com">ylia7707028@gmail.com</a></p>

                <div className={styles.social}>
                    <p className="label"><b>Наши соцсети:</b></p>
                    <a href="https://chat.whatsapp.com/Lq7ZqWFoBGh7jDTkOONem7" target="_blank">
                        <svg className={styles.socialIcon} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="0 0 20 20" version="1.1">
                            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                <g id="Dribbble-Light-Preview" transform="translate(-300.000000, -7599.000000)" fill="#25d366">
                                    <g id="icons" transform="translate(56.000000, 160.000000)">
                                        <path d="M259.821,7453.12124 C259.58,7453.80344 258.622,7454.36761 257.858,7454.53266 C257.335,7454.64369 256.653,7454.73172 254.355,7453.77943 C251.774,7452.71011 248.19,7448.90097 248.19,7446.36621 C248.19,7445.07582 248.934,7443.57337 250.235,7443.57337 C250.861,7443.57337 250.999,7443.58538 251.205,7444.07952 C251.446,7444.6617 252.034,7446.09613 252.104,7446.24317 C252.393,7446.84635 251.81,7447.19946 251.387,7447.72462 C251.252,7447.88266 251.099,7448.05372 251.27,7448.3478 C251.44,7448.63589 252.028,7449.59418 252.892,7450.36341 C254.008,7451.35771 254.913,7451.6748 255.237,7451.80984 C255.478,7451.90987 255.766,7451.88687 255.942,7451.69881 C256.165,7451.45774 256.442,7451.05762 256.724,7450.6635 C256.923,7450.38141 257.176,7450.3464 257.441,7450.44643 C257.62,7450.50845 259.895,7451.56477 259.991,7451.73382 C260.062,7451.85686 260.062,7452.43903 259.821,7453.12124 M254.002,7439 L253.997,7439 L253.997,7439 C248.484,7439 244,7443.48535 244,7449 C244,7451.18666 244.705,7453.21526 245.904,7454.86076 L244.658,7458.57687 L248.501,7457.3485 C250.082,7458.39482 251.969,7459 254.002,7459 C259.515,7459 264,7454.51465 264,7449 C264,7443.48535 259.515,7439 254.002,7439" id="whatsapp-[#128]">

                                        </path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </a>
                    <a href="https://invite.viber.com/?g2=AQBW264wUroNllI9uY56mS%2BS9gE8LyazGGuIc9U4gsW0TPA6KJCv3J4AcX7IUBEX" target="_blank">
                        <svg className={styles.socialIcon} xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none">
                            <path d="M13 4C12.4477 4 12 4.44772 12 5C12 5.55228 12.4477 6 13 6C14.2728 6 15.2557 6.41989 15.9179 7.08211C16.5801 7.74433 17 8.72725 17 10C17 10.5523 17.4477 11 18 11C18.5523 11 19 10.5523 19 10C19 8.27275 18.4199 6.75567 17.3321 5.66789C16.2443 4.58011 14.7272 4 13 4Z" fill="#7360f2" />
                            <path d="M5.014 8.00613C5.12827 7.1024 6.30277 5.87414 7.23488 6.01043L7.23339 6.00894C8.01251 6.15699 8.65217 7.32965 9.07373 8.10246C9.14298 8.22942 9.20635 8.34559 9.26349 8.44465C9.55041 8.95402 9.3641 9.4701 9.09655 9.68787C9.06561 9.7128 9.03317 9.73855 8.9998 9.76504C8.64376 10.0477 8.18114 10.4149 8.28943 10.7834C8.5 11.5 11 14 12.2296 14.7107C12.6061 14.9283 12.8988 14.5057 13.1495 14.1438C13.2087 14.0583 13.2656 13.9762 13.3207 13.9067C13.5301 13.6271 14.0466 13.46 14.5548 13.736C15.3138 14.178 16.0288 14.6917 16.69 15.27C17.0202 15.546 17.0977 15.9539 16.8689 16.385C16.4659 17.1443 15.3003 18.1456 14.4542 17.9421C12.9764 17.5868 7 15.27 5.08033 8.55801C4.97981 8.26236 4.99645 8.13792 5.01088 8.02991L5.014 8.00613Z" fill="#7360f2" />
                            <path d="M13 7C12.4477 7 12 7.44772 12 8C12 8.55228 12.4477 9 13 9C13.1748 9 13.4332 9.09745 13.6679 9.33211C13.9025 9.56676 14 9.82523 14 10C14 10.5523 14.4477 11 15 11C15.5523 11 16 10.5523 16 10C16 9.17477 15.5975 8.43324 15.0821 7.91789C14.5668 7.40255 13.8252 7 13 7Z" fill="#7360f2" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M7.51742 23.8312C7.54587 23.8469 7.57508 23.8612 7.60492 23.874C8.14762 24.1074 8.81755 23.5863 10.1574 22.5442L11.5 21.5C14.1884 21.589 16.514 21.2362 18.312 20.6071C20.3227 19.9035 21.9036 18.3226 22.6072 16.3119C23.5768 13.541 23.5768 8.45883 22.6072 5.68794C21.9036 3.67722 20.3227 2.0963 18.312 1.39271C15.1103 0.272407 8.82999 0.293306 5.68806 1.39271C3.67733 2.0963 2.09642 3.67722 1.39283 5.68794C0.423255 8.45883 0.423255 13.541 1.39283 16.3119C2.09642 18.3226 3.67733 19.9035 5.68806 20.6071C6.08252 20.7451 6.52371 20.8965 7 21C7 22.6974 7 23.5461 7.51742 23.8312ZM9 20.9107V19.7909C9 19.5557 8.836 19.3524 8.60597 19.3032C7.84407 19.1403 7.08676 18.9776 6.34862 18.7193C4.91238 18.2168 3.78316 17.0875 3.2806 15.6513C2.89871 14.5599 2.66565 12.8453 2.66565 10.9999C2.66565 9.15453 2.89871 7.43987 3.2806 6.3485C3.78316 4.91227 4.91238 3.78304 6.34862 3.28048C7.61625 2.83692 9.71713 2.56282 11.9798 2.56032C14.2422 2.55782 16.3561 2.82723 17.6514 3.28048C19.0876 3.78304 20.2169 4.91227 20.7194 6.3485C21.1013 7.43987 21.3344 9.15453 21.3344 10.9999C21.3344 12.8453 21.1013 14.5599 20.7194 15.6513C20.2169 17.0875 19.0876 18.2168 17.6514 18.7193C15.5197 19.4652 13.259 19.549 11.0239 19.4828C10.9071 19.4794 10.7926 19.5165 10.7004 19.5882L9 20.9107Z" fill="#7360f2" />
                        </svg>
                    </a>
                </div>

                <p className={styles.text}><b>Номера телефонов уполномоченных по защите прав потребителей:</b> <br></br>Отдел торговли и услуг Речицкого районного комитета <br></br> 
                    <a href="tel:8 (02340) 3-65-58">8 (02340) 3-65-58</a>, <a href="tel:8 (02340) 3-64-43">8 (02340) 3-64-43</a></p>
                
                <p className={styles.text}><b>Книга замечаний и предложений находится у продавца.</b></p>
            </Container>
        </Page>
    )
}