
function ContactInfo() {
  return (
    <form>
        <legend>Contact Information</legend>
        <label>
            <p>first name</p>
            <input type="text" name="" id="" />
        </label>
        <label>
            <p>last name</p>
            <input type="text" name="" id="" />
        </label>
        <label>
            <p>contact preference</p>
            <select>
                <option value="phone">phone</option>
                <option value="email">email</option>
            </select>
        </label>
        <label>
            <p>phone</p>
            <input type="tel" name="" id="" />
        </label>
        <label>
            <p>Email address</p>
            <input type="email" name="" id="" />
        </label>
        <label>
            <p>Region</p>
            <select name="" id="">
                <option value="us">united states</option>
            </select>
        </label>
        <label>
            <p>zip code</p>
            <input type="number" name="" id="" />
        </label>
        <label>
            <input type="checkbox" name="" id="" />
            <p>i'm interested in solar and power</p>
        </label>
        <label>
            <input type="checkbox" checked name="" id="" />
            <p>Get tesla updates</p>
        </label>
        <p>A town hall different from bala blu, blue blu bulaba. broom broom broom brooooooooom. Bala blu blue blu bulaba. The farmers will make more money. Your lunch will not be imported, cassava garri ewa and ehhh ehhhhnn. The farmer will make money, the dinner would be cassava, eba, ewa and everything.</p>
        <input type="submit" value="submit and continue" />
    </form>
  )
}

export default ContactInfo