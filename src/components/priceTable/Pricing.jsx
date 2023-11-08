import { pricingData } from '@/data/data';
import PriceTable from './PriceTable';

const Pricing = () => {
  return (
    <section className="pricingArea" id='pricing'>
      <div className="container">
        <div className="pricingWrapper">
          <div class="blog_header global_header">
            <h3 class="global_subtitle">Pricing</h3><h2 class="global_title">Choose the Plan Thats Right for You</h2>
          </div>
          <div className="pricing_content">
            {
              pricingData.map((item, index) => (
                <PriceTable data={item} key={index} />
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
