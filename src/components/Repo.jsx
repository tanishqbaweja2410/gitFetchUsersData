import React from 'react'

const Repo = ({ repos }) => {
  return (
    <>
      {repos.map((repo, idx) => (
        <div key={idx} className="bg-gray-900 p-3 leading-8">
          <a href={repo.html_url} className="text-sky-500 font-semibold break-words hover:underline" target="_blank">
            {repo.full_name}
          </a>
          <div className='flex gap-x-5'>
            <h1 className='text-sm font-semibold'>
              {'🟢 ' + repo.language}
            </h1>
            <h1 className='text-sm font-semibold'>Forks : {repo.forks}</h1>
            <h1 className='text-sm font-semibold'>Stars : {repo.stargazers_count}</h1>
          </div>
        </div>
      ))}
    </>
  )
}

export default Repo
