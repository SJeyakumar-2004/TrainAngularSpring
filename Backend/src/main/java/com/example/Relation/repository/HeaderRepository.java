package com.example.Relation.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Relation.entity.TrainHeader;

public interface HeaderRepository extends JpaRepository<TrainHeader,Integer>
{
	
}
