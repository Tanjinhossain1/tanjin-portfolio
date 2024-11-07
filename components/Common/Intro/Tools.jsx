import Badge from '../Badge';
import { TECH_SOFT_SKILL, TECH_STACK } from '../../../constants/constants';
const Tools = () => {
  return (
    <div className='flex flex-col space-y-1 pt-6'>
      <div className='flex flex-col gap-y-4'>
        <span className='text-gray-200 text-xs font-bold'>Tools</span>
        <div className='flex flex-wrap gap-2 '>
          {TECH_STACK.map((item, index) => (
            <Badge key={index} title={item} />
          ))}
        </div>

        <span className='text-gray-200 text-xs font-bold border-t pt-2'>Soft Skill</span>
        <div className='flex flex-wrap gap-2 '>
          {TECH_SOFT_SKILL.map((item, index) => (
            <Badge key={index} title={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;
