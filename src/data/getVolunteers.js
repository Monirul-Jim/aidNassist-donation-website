export const getVolunteers = async () => {
    let data = await fetch("http://localhost:3000/api/volunteerses");
    data = await data.json();
    if (data.success) {
        return data.result;
    } else {
        return { success: false }
    }
}