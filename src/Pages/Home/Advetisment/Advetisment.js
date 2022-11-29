import AdvetismentCard from "./AdvetismentCard";

const Advetisment = ({ advetisments }) => {
    console.log(advetisments)
    return (
        <div className='my-10'>
            <h3 className="text-4xl font-bold text-center text-primary">Advertisement</h3>
            <div className='mt-32 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    advetisments.map(ads => <AdvetismentCard
                        key={ads._id}
                        Advetisment={ads}
                    >

                    </AdvetismentCard>)
                }
            </div>
        </div>
    );
};

export default Advetisment;