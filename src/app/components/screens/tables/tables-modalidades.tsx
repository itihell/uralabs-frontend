const TablesModalidades = async () => {
  return (
    <div>
      <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400 sm:rounded-lg'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th className='px-6 py-3'>ID</th>
              <th className='px-6 py-3'>Modalidade</th>
              <th className='px-6 py-3'>Config</th>
            </tr>
          </thead>
          <tbody className='bg-white border-b dark:bg-gray-900 dark:border-gray-700'></tbody>
        </table>
      </div>
    </div>
  );
};
export default TablesModalidades;
