import React, { useState } from 'react' 
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native' 
import axios from 'axios' 
import { Button } from 'react-native-paper'
 
const CompanyAccordion = () => {

  // Stores all companies from API
  const [companies, setCompanies] = useState([])

  // Controls showing/hiding company list
  const [showCompanies, setShowCompanies] = useState(false)

  // Track which company, department, and employee is opened
  const [openCompany, setOpenCompany] = useState(null)
  const [openDepartment, setOpenDepartment] = useState(null)
  const [openEmployee, setOpenEmployee] = useState(null)

  // Fetch company data from API
  function getData() {

    // If data already exists, just toggle visibility
    if (companies.length > 0) {
      setShowCompanies(!showCompanies)
      return
    }

    // API request
    axios
      .get('https://student-api.acpt.lk/api/companies')
      .then((res) => {

        // Handle different response structures
        const data = res.data.data || res.data

        // Save companies to state
        setCompanies(data)

        // Show company list
        setShowCompanies(true)

        // Reset open accordions
        setOpenCompany(null)
        setOpenDepartment(null)
        setOpenEmployee(null)
      })
      .catch((err) => console.log(err))
  }

  return (
    // Scrollable container
    <ScrollView style={styles.container}>

      {/* Load companies button */}
      <Button mode="contained" onPress={getData} style={styles.button}>
        {showCompanies ? '▼ Load Companies' : '▶ Load Companies'}
      </Button>

      {/* Render companies only when enabled */}
      {showCompanies &&
        companies.map((company, cIndex) => (
          <View key={cIndex} style={styles.block}>

            {/* COMPANY HEADER */}
            <TouchableOpacity
              style={[
                styles.companyBox,
                openCompany === cIndex && styles.activeCompany,
              ]}
              onPress={() => {
                // Toggle company accordion
                setOpenCompany(openCompany === cIndex ? null : cIndex)

                // Close inner accordions
                setOpenDepartment(null)
                setOpenEmployee(null)
              }}
            >
              <Text style={styles.title}>
                {openCompany === cIndex ? '▼' : '▶'} {company.company}
              </Text>
            </TouchableOpacity>

            {/* COMPANY DETAILS */}
            {openCompany === cIndex && (
              <View style={styles.inner}>

                {/* Company location */}
                <Text style={styles.text}>
                  Location: {company.location}
                </Text>

                <Text style={styles.subTitle}>Departments</Text>

                {/* Loop through departments */}
                {company.departments?.map((dept, dIndex) => (
                  <View key={dIndex}>

                    {/* DEPARTMENT HEADER */}
                    <TouchableOpacity
                      style={[
                        styles.departmentBox,
                        openDepartment === dIndex && styles.activeDepartment,
                      ]}
                      onPress={() => {
                        // Toggle department accordion
                        setOpenDepartment(openDepartment === dIndex ? null : dIndex)

                        // Close employee accordion
                        setOpenEmployee(null)
                      }}
                    >
                      <Text>
                        {openDepartment === dIndex ? '▼' : '▶'} {dept.name}
                      </Text>
                    </TouchableOpacity>

                    {/* EMPLOYEE LIST */}
                    {openDepartment === dIndex && (
                      <View style={styles.inner}>

                        <Text style={styles.subTitle}>Employees</Text>

                        {/* Loop through employees */}
                        {dept.employees?.map((emp, eIndex) => (
                          <View key={eIndex}>

                            {/* EMPLOYEE HEADER */}
                            <TouchableOpacity
                              style={[
                                styles.employeeBox,
                                openEmployee === eIndex && styles.activeEmployee,
                              ]}
                              onPress={() =>
                                setOpenEmployee(openEmployee === eIndex ? null : eIndex)
                              }
                            >
                              <Text>
                                {openEmployee === eIndex ? '▼' : '▶'} {emp.name}
                              </Text>
                            </TouchableOpacity>

                            {/* EMPLOYEE DETAILS */}
                            {openEmployee === eIndex && (
                              <View style={styles.inner}>
                                <Text>Position: {emp.position}</Text>

                                {/* Employee skills */}
                                <View style={styles.skillRow}>
                                  {emp.skills?.map((skill, i) => (
                                    <Text key={i} style={styles.skill}>
                                      {skill}
                                    </Text>
                                  ))}
                                </View>
                              </View>
                            )}
                          </View>
                        ))}
                      </View>
                    )}
                  </View>
                ))}
              </View>
            )}
          </View>
        ))}

    </ScrollView>
  )
}

// Styles
const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#b6c0b6',
  },

  button: {
    marginBottom: 16,
  },

  block: {
    marginBottom: 10,
  },

  companyBox: {
    padding: 12,
    borderWidth: 2,
    borderColor: 'blue',
    borderRadius: 8,
    backgroundColor: '#e8d9d9',
  },
  activeCompany: {
    backgroundColor: '#ffffff',
  },

  departmentBox: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#999',
    backgroundColor: '#f5f5f5',
    marginTop: 6,
  },
  activeDepartment: {
    backgroundColor: '#fff3cd',
  },

  employeeBox: {
    padding: 8,
    borderWidth: 1,
    borderColor: '#aaa',
    backgroundColor: '#f9f9f9',
    marginTop: 6,
  },
  activeEmployee: {
    backgroundColor: '#d4edda',
  },

  inner: {
    marginLeft: 16,
    marginTop: 6,
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subTitle: {
    fontWeight: 'bold',
    marginTop: 8,
  },
  text: {
    marginBottom: 6,
  },

  skillRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 6,
  },
  skill: {
    backgroundColor: 'blue',
    color: 'white',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    fontSize: 12,
    marginRight: 6,
    marginBottom: 6,
  },
})

// Export component
export default CompanyAccordion
