import Button from '@/components/Button';
import PriceTable from '@/components/PriceTable';

const Pricing = () => {
  return (
    <div className="pricing">
      <h1>Pricing</h1>
      <PriceTable title="Individual" description="50 influencer-hours daily" price={20} />
      <PriceTable title="Professional" description="250 influencer-hours daily" price={50} />
      <PriceTable title="Enterprise" description="Contact Us" price="Custom" />
      <Button title="Ready to shine on social media? Let's amplify your presence together!" />
    </div>
  );
}

export default Pricing;
