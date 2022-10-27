import React, { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button/Button';
import { FormWrapper } from '../../components/FormWrapper/FormWrapper';
import { PageHeaderWrapper } from '../../components/PageHeaderWrapper/PageHeaderWrapper';
import { Searchbox } from '../../components/Searchbox/Searchbox';
import './HomePage.scss';

export function Home() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const navigate = useNavigate();

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setSearchQuery(event.currentTarget.value);
  }

  function handleSubmitNavigation() {
    navigate({
      pathname: '/search',
      search: `?query=${searchQuery}`,
    });
  }

  return (
    <div className='HomePage'>
      <PageHeaderWrapper>
        <h1>
          Dream <span>destinations</span>, one search away.
        </h1>
      </PageHeaderWrapper>
      <FormWrapper onSubmitHandler={handleSubmitNavigation}>
        <Searchbox
          placeholderText='Where will you go...'
          onChangeHandler={handleChange}
          value={searchQuery}
        />
        <Button variant='submit' fullWidth>
          Take me there
        </Button>
      </FormWrapper>
    </div>
  );
}
