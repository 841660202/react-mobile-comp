import React from 'react'
import dayjs, { Dayjs } from "dayjs";
import styles from './index.scss'
import classNames from 'classnames'
const Strings = {
    c_dayNames: ["日", "一", "二", "三", "四", "五", "六"],
}
interface IDateProps {
    value?: number;
    curMonth?: any;
    dot?: any;
}
class Date extends React.PureComponent<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            value: dayjs(dayjs().format('YYYY-MM-DD')).valueOf(),
            curMonth: dayjs(dayjs().format('YYYY-MM')).valueOf(),
            dot: false,
        }
    }
    // 计算日历起止

    handleLast(curMonth: Dayjs) {
        this.setState({
            curMonth: dayjs(curMonth).subtract(1, 'month').valueOf()
        })
    }
    handleNext(curMonth: Dayjs) {
        this.setState({
            curMonth: dayjs(curMonth).add(1, 'month').valueOf()
        })
    }

    renderLunar(item: any) {
        return null
    }
    // 上月
    lastMonth() {
        // 当前月的1号
        let date = dayjs(this.state.curMonth).startOf("month")
        const count = date.day();//1号是星期几
        date = dayjs(date).subtract(count, "day");//比如本月1号是星期3，那么上个月的数据就应该显示3个
        let today = date
        let datas = []
        for (let i = 0; i < count; i++) {
            datas.push(today)
            today = dayjs(today).add(1, 'day')
        }
        return datas
    }
    // 选中时间
    handleSelectDay(item: Dayjs) {
        console.log('handleSelectDay', item.format('YYYY-MM-DD'))
        this.setState({
            value: item.valueOf()
        })
        if (this.props.onChange) {
            this.props.onChange(item.valueOf())
        }
    }
    // 本月
    thisMonth() {
        //获取本月1号数据
        const date = dayjs(this.state.curMonth).startOf("month")
        const count = date.daysInMonth();//当前选中月份的总条数
        //最后一个工作日,本月1号,+1月-1天=本月最后一天
        // let ui: ReactNode[] = []
        let today = date
        let datas = []
        for (let i = 0; i < count; i++) {
            datas.push(today)
            today = today.add(1, 'day')
        }
        return datas
    }
    // 下月
    nextMonth() {
        //选中的时间改为1号,并且加上1个月
        let date = dayjs(this.state.curMonth).startOf('month').add(1, 'month')
        const count = 7 - date.day();//7-星期几，就可知道要渲染几个下月数据
        let datas: Dayjs[] = []
        if (count === 7) {
            return datas;
        }
        for (let i = 0; i < count; i++) {
            datas.push(date)
            date = dayjs(date).add(1, 'day')
        }
        return datas
    }

    genDates() {
        const last = this.lastMonth();
        const curt = this.thisMonth();
        const next = this.nextMonth();
        const dates = ([] as any)
            .concat(last)
            .concat(curt)
            .concat(next)
        let row = dates.length / 7
        let data = []
        for (let index = 0; index < row; index++) {
            data[index] = [] as Dayjs[]
            for (let col = 0; col < 7; col++) {
                data[index].push(dates[index * 7 + col])
            }

        }
        return data

    }





    // 操作

    render() {
        const { curMonth } = this.state

        return (
            <div className={styles.warp}>
                <div className={styles.header}>
                    <img
                        src={'https://images.tuyacn.com/rms-static/31f13ef0-8176-11eb-aee8-496f89a27c2f-1615363020895.png'}
                        style={{ width: 20, height: 20 }}
                        onClick={this.handleLast.bind(this, curMonth)}
                    />
                    <div className={styles.header_text}>{dayjs(curMonth).format('YYYY年MM月')}</div>
                    <img
                        src={'https://images.tuyacn.com/rms-static/31f13ef0-8176-11eb-aee8-496f89a27c2f-1615363020895.png'}
                        style={{ width: 20, height: 20, transform: 'rotate(-180deg)' }}
                        onClick={this.handleNext.bind(this, curMonth)}
                    />
                </div>
                {/*星期*/}
                <div className={styles.dayWrap}>
                    {(Strings.c_dayNames || []).map(day => (
                        <div key={day} className={styles.dayItem}>
                            <span style={{ fontSize: 12 }}>{day}</span>
                        </div>
                    ))}
                </div>
                {/*日期*/}
                {this.genDates().map((item, index) => <div className={styles.dateWrap} key={index}>
                    {
                        (item || []).map((date) => (
                            <>
                                {
                                    date && <div key={date.valueOf()} className={classNames(styles.dateItem,)}>
                                        <div
                                            onClick={() => this.handleSelectDay(date)}
                                            className={
                                                classNames(
                                                    styles.dateItem_text,
                                                    {
                                                        [styles.dateItem_active]: this.state.value === date.valueOf()
                                                    }
                                                )}
                                        >
                                            {dayjs(date).date()}
                                        </div>
                                    </div>
                                }</>
                        ))
                    }
                </div>)}
            </div>
        )
    }
}

export default Date