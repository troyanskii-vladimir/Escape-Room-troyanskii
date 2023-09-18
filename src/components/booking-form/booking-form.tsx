import { SubmitHandler, Validate, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Page404 from '../../pages/404/404';
import { getQuestBookingData, getQuestBookingPlaceId, getQuestData } from '../../store/quests-data/quest-data.selectors';
import styles from './booking-form.module.css';
import { bookingAction } from '../../store/api-action';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../config';


type Inputs = {
  name: string;
  tel: string;
  person: string;
  children: boolean;
  userAgreement: boolean;
  date: string;
};


function BookingForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const bookingDataAllPlaces = useAppSelector(getQuestBookingData);
  const selectedId = useAppSelector(getQuestBookingPlaceId);
  const quest = useAppSelector(getQuestData);

  const bookingData = bookingDataAllPlaces.find((booking) => booking.id === selectedId);

  const { register, handleSubmit, formState: {errors} } = useForm<Inputs>();

  const checkPeopleCount: Validate<string, Inputs> = (value) => {
    return (Number(value) >= quest.peopleMinMax[0] && Number(value) <= quest.peopleMinMax[1]);
  }


  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const day = data.date.slice(0,5) === 'today' ? 'today' : 'tomorrow';
    const time = data.date.slice(5);

    dispatch(bookingAction({
      date: day,
      time: time,
      contactPerson: data.name,
      phone: data.tel,
      withChildren: data.children,
      peopleCount: Number(data.person),
      placeId: selectedId,
      questId: quest.id,
    }))

    navigate(AppRoute.MyQuests);
  }

  if (!bookingData) {
    return <Page404 />;
  }

  return (
    <form
    className="booking-form"
    action="https://echo.htmlacademy.ru/"
    method="post"
    onSubmit={handleSubmit(onSubmit)}
    >
      <fieldset className="booking-form__section">
        <legend className="visually-hidden">Выбор даты и времени</legend>
        <fieldset className="booking-form__date-section">
          <legend className="booking-form__date-title">Сегодня</legend>
          <div className="booking-form__date-inner-wrapper">
            {
              bookingData.slots.today.map((slot) => {
                return (
                  <label className="custom-radio booking-form__date" key={`today${slot.time}`}>
                    <input
                      type="radio"
                      id={`today${slot.time}`}
                      required
                      defaultValue={`today${slot.time}`}
                      disabled={!slot.isAvailable}
                      {...register(
                        "date",
                        {
                          required: "Выберите время",
                        }
                      )}
                    />
                    <span className="custom-radio__label">{slot.time}</span>
                  </label>
                )
              })
            }
          </div>
        </fieldset>
        <fieldset className="booking-form__date-section">
          <legend className="booking-form__date-title">Завтра</legend>
          <div className="booking-form__date-inner-wrapper">
          {
              bookingData.slots.today.map((slot) => {
                return (
                  <label className="custom-radio booking-form__date" key={`tomorrow${slot.time}`}>
                    <input
                      type="radio"
                      id={`tommorow${slot.time}`}
                      required
                      defaultValue={`tommo${slot.time}`}
                      disabled={!slot.isAvailable}
                      {...register(
                        "date",
                        {
                          required: "Ввыберите время",
                        }
                      )}
                    />
                    <span className="custom-radio__label">{slot.time}</span>
                  </label>
                )
              })
            }
          </div>
        </fieldset>
      </fieldset>
      <fieldset className="booking-form__section">
        <legend className="visually-hidden">Контактная информация</legend>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="name">
            Ваше имя
          </label>
          <input
            type="text"
            id="name"
            placeholder="Имя"
            {...register(
              "name",
              {
                required: "Введите имя",
                pattern: /[А-Яа-яЁёA-Za-z]{1,}/,
                maxLength: 15,
                minLength: 1,
              }
            )}
          />
          {errors.name?.type === 'required' && <><span className={styles.error} role="alert">{errors.name.message}</span></>}
          {errors.name?.type === 'pattern' && <><span className={styles.error} role="alert">Введите корректное имя</span></>}
          {errors.name?.type === 'maxLength' && <><span className={styles.error} role="alert">Максимальная длина имени 15 символов</span></>}
        </div>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="tel">
            Контактный телефон
          </label>
          <input
            type="tel"
            id="tel"
            placeholder="Телефон"
            {...register(
              "tel",
              {
                required: "Введите телефон",
                pattern: /\++[7]+[0-9]{10}$/
              }
            )}
          />
          {errors.tel?.type === 'required' && <><span className={styles.error} role="alert">{errors.tel.message}</span></>}
          {errors.tel?.type === 'pattern' && <><span className={styles.error} role="alert">Введите корректный номер</span></>}
        </div>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="person">
            Количество участников
          </label>
          <input
            type="number"
            id="person"
            placeholder="Количество участников"
            {...register(
              "person",
              {
                required: "Введите количество участников",
                validate: {
                  checkPeopleCount
                }
              }
            )}
          />
          {errors.person?.type === 'required' && <><span className={styles.error} role="alert">{errors.person.message}</span></>}
          {errors.person?.type === 'checkPeopleCount' && <><span className={styles.error} role="alert">Квест рассчитан на {quest.peopleMinMax.at(0)}-{quest.peopleMinMax.at(-1)} человек</span></>}
        </div>
        <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--children">
          <input
            type="checkbox"
            id="children"
            {...register(
              "children",
            )}
          />
          <span className="custom-checkbox__icon">
            <svg width={20} height={17} aria-hidden="true">
              <use xlinkHref="#icon-tick" />
            </svg>
          </span>
          <span className="custom-checkbox__label">
            Со&nbsp;мной будут дети
          </span>
        </label>
      </fieldset>
      <button
        className="btn btn--accent btn--cta booking-form__submit"
        type="submit"
      >
        Забронировать
      </button>
      <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--agreement">
        {errors.userAgreement?.type === 'required' && <><span className={styles.error_up} role="alert">{errors.userAgreement.message}</span></>}
        <input
          type="checkbox"
          id="id-order-agreement"
          {...register(
            "userAgreement",
            {
              required: "Чтобы продолжить установите этот флажок",
            }
          )}
        />
        <span className="custom-checkbox__icon">
          <svg width={20} height={17} aria-hidden="true">
            <use xlinkHref="#icon-tick" />
          </svg>
        </span>
        <span className="custom-checkbox__label">
          Я&nbsp;согласен с&nbsp;
          <Link className="link link--active-silver link--underlined" to={AppRoute.Main}>
            правилами обработки персональных данных
          </Link>
          &nbsp;и пользовательским соглашением
        </span>
      </label>
    </form>
  );
}

export default BookingForm;
