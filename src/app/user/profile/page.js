import Master from '@/components/master/Master';
import ProfileForm from '@/components/user/ProfileForm';
import { getCookies } from '@/utility/CookieHelper';

async function getData() {
    let storedCookies = await getCookies();
    const response = await fetch(`${process.env.HOST}/api/user/profile`, {
        cache: 'no-cache',
        headers: { 'Cookie': storedCookies }
    });

    const result = await response.json();
    return result['data'];
}

const Page = () => {

    let profileData = getData();
    
    return (
        <div>
            <Master>
                <ProfileForm data={profileData} />
            </Master>
        </div>
    );
}

export default Page;
