import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";

import { useAuth } from "../../hooks/auth";
import { classroomApi } from "../../services/classroomApi";

import { styles } from "./styles";

async function listCourses(token: string) {
	classroomApi.defaults.headers.authorization = `Bearer ${token}`;
	const res = await classroomApi.get('/v1/courses');
	return res.data.courses;
}

type CourseData = {
	name: string,
	key: string
}

export function Home () {
    const { user } = useAuth();
	const [items, setItems] = useState<CourseData[]>([]);
        
	useEffect(() => {
		async function getItems() {
			try {
				let course = new Array<CourseData>(); 
				const data = await listCourses(user.token);
				for (let i=0;i<data.length;i++) {
					const list = JSON.parse(JSON.stringify(data[i]));
					course.push({ 
						name: list.name,
						key: String(i)
					});
				}
				setItems(course);
			} catch (error) {
				alert("Ocorreu um erro ao buscar os items " + error);
			}
		}
		getItems();
	}, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={items}
                renderItem={({ item }) => {
                    return (
                        <Text style={styles.listItem}>
                                {item.name}
                        </Text>
                    );    
                }}
                ItemSeparatorComponent={() => {
                    return (
                        <View style={styles.itemSeparator} /> 
                    )
                }}
            />
        </View>

    );
}